import { parse } from 'postcss-values-parser';

import getStack from './getStack';

const PLUGIN_NAME = 'postcss-stack';

export default options => ({
  postcssPlugin: PLUGIN_NAME,
  Once(root, { Declaration }) {
    const stacked = getStack(options);

    root.walkDecls((decl) => {
      const { value } = decl;

      if (/(^|[^\w-])(stack?)\(/i.test(value)) {
        const ast = parse(value);

        ast.walkFuncs((node) => {
          const stackQuoted = node.nodes.filter(item => item.type === 'quoted')[0];

          const quoteRegExp = new RegExp(stackQuoted.quote, 'g');
          const stack = stackQuoted.value.replace(quoteRegExp, '');

          if (typeof stacked[stack] !== 'undefined') {
            // Create a new declaration with just the found stack value
            const replacement = new Declaration({
              prop: '',
              raws: { between: '' },
              value: String(stacked[stack]),
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

        if (value !== modifiedValue) {
          decl.value = modifiedValue;
        }
      }
    });
  },
});
