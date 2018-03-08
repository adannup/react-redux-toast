import React from 'react';
import PropTypes from 'prop-types';
import ToastContainer from './ToastContainer';
import './Toasts.css';

const Toasts = ({ toasts }) => {
  const toastsList = toasts.map(toast => (
    <ToastContainer
      key={toast.id}
      id={toast.id}
      dismiss={toast.dismiss}
      alert={toast.alert}
    >
      { toast.message }
    </ToastContainer>
  ));
  return (
    <div className="container-toasts">{toastsList}</div>
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
