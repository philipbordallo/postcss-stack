module.exports = {
  'basic': {
    message: 'should support basic usage',
    options: {
      list: [
        { beneath: -1 },
        'application',
        'tool-tip',
        'modal'
      ]
    }
  },

  'reverse': {
    message: 'should support list being reversed',
    options: {
      list: [
        'modal',
        'tool-tip',
        'application',
        { beneath: -1 }
      ].reverse()
    }
  },

  'list-as-a-function': {
    message: 'should allow list as a function',
    options: {
      list: () => ([
        { beneath: -1 },
        'application',
        'tool-tip',
        'modal'
      ])
    }
  },

  'increment': {
    message: 'should allow larger increments',
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

  'order': {
    message: 'should use correct order independent of explicitly defined items',
    options: {
      list: [
        { first: 1 },
        'second',
        { third: 1 },
        'fourth',
        'fifth',
      ],
    }
  },

  'error-message': {
    message: 'should throw an error if stack hasn’t been defined',
    errors: {
      message: /Unknown/
    },
    options: {
      list: [
        'modal',
        'tool-tip',
        'application',
        { beneath: -1 }
      ]
    }
  }
};
