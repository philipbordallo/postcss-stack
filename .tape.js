module.exports = {
  'postcss-stack': {
    'basic': {
      message: 'supports basic usage',
      options: {
        list: [
          { beneath: -1 },
          'application',
          'tool-tip',
          'modal'
        ]
      }
    },
    'increment': {
      message: 'allows larger increments',
      options: {
        list: [
          { beneath: -1 },
          'application',
          'tool-tip',
          'modal'
        ],
        increment: 100
      }
    },
    'reverse': {
      message: 'allows list to be reversed',
      options: {
        list: [
          'modal',
          'tool-tip',
          'application',
          { beneath: -1 }
        ],
        reverse: true
      }
    }
  }
};
