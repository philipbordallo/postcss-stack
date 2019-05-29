import postcss from 'postcss';
import { parse } from 'postcss-values-parser';

import getStack from './lib/getStack';

const PLUGIN_NAME = 'postcss-stack';
const stackRegExp = /(^|[^\w-])(stack?)\(/i;

export default postcss.plugin(PLUGIN_NAME, options => (root) => {
  const stacked = getStack(options);

  root.walkDecls((decl) => {
    const { value: originalValue } = decl;

    if (stackRegExp.test(originalValue)) {
      const ast = parse(originalValue);

      ast.walkFuncs((node) => {
        const stackQuoted = node.nodes.filter(item => item.type === 'quoted')[0];

        const quoteRegExp = new RegExp(stackQuoted.quote, 'g');
        const stack = stackQuoted.value.replace(quoteRegExp, '');

        if (typeof stacked[stack] !== 'undefined') {
          // Create a new declaration with just the found stack value
          const replacement = postcss.decl({
            prop: '',
            raws: { between: '' },
            value: stacked[stack],
          });

          // Replace `stack(STACK_NAME)` func node with new declaration node
          node.replaceWith(replacement);
        }
        else {
          throw decl.error('Unknown stack', {
            plugin: PLUGIN_NAME,
            word: stack,
          });
        }
      });

      const modifiedValue = ast.toString();

      if (originalValue !== modifiedValue) {
        decl.value = modifiedValue; // eslint-disable-line no-param-reassign
      }
    }
  });
});
