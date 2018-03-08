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

const removeToast = id => ({
  type: 'REMOVE_TOAST',
  id,
});

export {
  addToast,
  removeToast,
};
