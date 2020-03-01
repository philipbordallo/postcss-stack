/** @typedef {Object.<string,number>} StackShape */

/**
 * @typedef Options
 * @property {Function|string[]|StackShape[]} [list]
 * @property {number} [increment]
 */

/** @type {Options} */
const DEFAULT_OPTIONS = {
  list: [],
  increment: 1,
};

/**
 * Get the stack based on the list of items
 * @param {Options} argOptions
 * @returns {StackShape}
 */
function getStack(argOptions) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...argOptions,
  };

  const list = Array.isArray(options.list)
    ? options.list
    : options.list();

  const explicitList = [];
  const incrementalList = [];
  const listSet = new Set();

  list.forEach((item) => {
    const isObject = typeof item === 'object';
    const name = isObject
      ? Object.keys(item)[0]
      : item;

    if (!listSet.has(name)) {
      listSet.add(name);

      if (isObject) {
        explicitList.push({
          name,
          zIndex: item[name],
        });
      }
      else {
        incrementalList.push({
          name,
          zIndex: null,
        });
      }
    }
  });

  const combinedLists = [
    ...incrementalList,
    ...explicitList,
  ];

  return combinedLists
    .map((item, index) => {
      const value = item.zIndex !== null
        ? item.zIndex
        : index * options.increment;

      return { [item.name]: value };
    })
    .reduce((collection, item) => ({
      ...collection,
      ...item,
    }), {});
}

export default getStack;
