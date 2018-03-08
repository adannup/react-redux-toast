const addToast = toast => ({
  type: 'ADD_TOAST',
  toast: {
    message: toast.message,
    dismiss: toast.dismiss || 2000,
    alert: toast.alert || 'alert-primary',
    position: toast.position || 'top-center',
  },
});

const removeToast = id => ({
  type: 'REMOVE_TOAST',
  id,
});

export {
  addToast,
  removeToast,
};
