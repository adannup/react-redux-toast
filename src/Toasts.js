import React from 'react';
import PropTypes from 'prop-types';
import Toast from './Toast';

const Toasts = ({ toasts }) => {
  // const toastsList = toasts.map(toast => (
  //   <Toast>{ toast.message }</Toast>
  // ));

  return (
    <div>Hola mundo</div>
  );
};

Toasts.propTypes = {
  toasts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    dismiss: PropTypes.number,
    message: PropTypes.string,
    alert: PropTypes.string,
    position: PropTypes.string,
  })).isRequired,
};

export default Toasts;
