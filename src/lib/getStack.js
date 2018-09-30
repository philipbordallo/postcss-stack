const DEFAULT_OPTIONS = {
  list: [],
  increment: 1,
  reverse: false,
};

function getStack(argOptions) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...argOptions,
  };

  const list = options.reverse
    ? options.list.reverse()
    : options.list;

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
