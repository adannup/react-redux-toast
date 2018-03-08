import React, { Component } from 'react';

class Toast extends Component {
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}

export default Toast;
