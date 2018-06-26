# [PostCSS](https://github.com/postcss/postcss) Stack #
> A better way to manage z-indexes


## Install ##

```sh
# npm
npm install --save-dev postcss-stack

# or yarn
yarn add --dev postcss-stack
```


## Usage ##

Add it to your PostCSS work-flow, [whatever way you choose to](https://github.com/postcss/postcss#usage).

```js
// es2015
import stack from 'postcss-stack';

// or commonjs
const stack = require('postcss-stack');

stack({
  list: [
    { 'beneath': -1 },
    'application',
    'tool-tip',
    'modal'
  ]
});
```

**Input**
```pcss
.modal {
  z-index: stack('modal');
}

.tool-tip {
  z-index: stack('tool-tip');
}

.element-beneath {
  z-index: stack('beneath');
}
```

**Output**
```css
.modal {
  z-index: 2;
}

.tool-tip {
  z-index: 1;
}

.element-beneath {
  z-index: -1;
}
```


## Stacking Context ##

Remember that stacking context is relative to the parent, so if you have a parent element that is `z-index: 2` and a child of `z-index: 1`, the child will not be below the parent but instead relative to any other stacking context of that parent. 

For more information on stacking context, [MDN has a good overview](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).


## [License](./LICENSE) ##
