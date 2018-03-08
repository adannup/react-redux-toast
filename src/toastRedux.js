const { createStore, combineReducer } = require('redux');
const uuidv4 = require('uuid/v4');

const toast = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      const { alert, dismiss, message, position } = action;
      return {
        id: uuidv4(),
        alert,
        dismiss,
        message,
        position,
      };
    default:
      return state;
  }
}

const toasts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, toast(undefined, action)]
    case 'REMOVE_TOAST':
      return state;
    default:
      return state;
  }
};


const addToast = (
  message,
  dismiss = 2000,
  alert = 'alert-success',
  position = 'top-center',
) => ({
  type: 'ADD_TOAST',
  message,
  dismiss,
  alert,
  position,
});

const store = createStore(toasts);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addToast('Adding toast notification'));

store.dispatch(addToast('Adding toast notification', 3000, 'alert-info'));
