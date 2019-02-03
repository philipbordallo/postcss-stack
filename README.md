# PostCSS Stack [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]
> A better way to manage z-indexes

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Dependency Status][david-img]][david-url] 

Define the stack of components and PostCSS Stack will resolve the z-indexes for you instead of playing a game of `z-index: 99999`.

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


## Options ##

option | type | default | description
:--- |:--- |:--- |:--- 
**`list`** | _array_ or _function_ | `[]` |  Array of items in the stack or function returning array of items
**`increment`** | _number_ | `1` | The increment value 
 

## Stacking Context ##

Remember that stacking context is relative to the parent, so if you have a parent element that is `z-index: 2` and a child of `z-index: 1`, the child will not be below the parent but instead relative to any other stacking context of that parent. 

For more information on stacking context, [MDN has a good overview](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).


## [License](./LICENSE) ##


[david-img]: https://img.shields.io/david/philipbordallo/postcss-stack.svg
[david-url]: https://david-dm.org/philipbordallo/postcss-stack

[cli-img]: https://img.shields.io/travis/philipbordallo/postcss-stack.svg
[cli-url]: https://travis-ci.org/philipbordallo/postcss-stack

[npm-img]: https://img.shields.io/npm/v/postcss-stack.svg
[npm-url]: https://www.npmjs.com/package/postcss-stack

[postcss]: https://github.com/postcss/postcss
