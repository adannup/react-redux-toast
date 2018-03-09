import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

class Toast extends Component {
  componentDidMount() {
    setTimeout(() => {
      // this.props.removeToast(this.props.id);
      this.props.removeToast();
    }, this.props.dismiss);
  }

  render() {
    const seconds = this.props.dismiss / 1000;
    return (
      <div
        className={`toast-notification ${this.props.alert}`}
        style={{ animationDuration: `${seconds}s` }}
      >
        {this.props.children}
      </div>
    );
  }
}

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  dismiss: PropTypes.number.isRequired,
  removeToast: PropTypes.func.isRequired,
  alert: PropTypes.string.isRequired,
};

export default Toast;
