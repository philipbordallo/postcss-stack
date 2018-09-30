import postcss from 'postcss';
import parser from 'postcss-values-parser';

import getStack from './lib/getStack';


const stackRegExp = /(^|[^\w-])(stack?)\(/i;

export default postcss.plugin('postcss-stack', options => (root) => {
  const stacked = getStack(options);

  root.walkDecls((decl) => {
    const { value: originalValue } = decl;

    if (stackRegExp.test(originalValue)) {
      const ast = parser(originalValue).parse();

      ast.walkType('func', (node) => {
        const stack = node.nodes.filter(item => item.type === 'string')[0].value;

        node.replaceWith(stacked[stack]);
      });

      const modifiedValue = ast.toString();

      if (originalValue !== modifiedValue) {
        decl.value = modifiedValue; // eslint-disable-line no-param-reassign
      }
    }
  });
});
