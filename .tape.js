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
    'reverse': {
      message: 'should allow list to be reversed',
      options: {
        list: [
          'modal',
          'tool-tip',
          'application',
          { beneath: -1 }
        ],
        reverse: true
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
        ],
        reverse: true
      }
    }
  };
