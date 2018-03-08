import React, { Component } from 'react';
import ToastsContainer from './ToastsContainer';

class Demo extends Component {
  onClickAddToast() {
    this.props.addToast('Hola mundo!');
  }

  render() {
    return (
      <div>
        <ToastsContainer />
        <button onClick={this.onClickAddToast}>Push Notification</button>
      </div>
    );
  }
}

export default Demo;
