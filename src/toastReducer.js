const uuidv4 = require('uuid/v4');

const toast = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST': {
      const {
        alert,
        dismiss,
        message,
        position,
      } = action;

      return {
        id: uuidv4(),
        alert,
        dismiss,
        message,
        position,
      };
    }
    default:
      return state;
  }
};

const toasts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, toast(undefined, action)];
    case 'REMOVE_TOAST':
      return state.filter(s => s.id !== action.id);
    default:
      return state;
  }
};

export default toasts;
