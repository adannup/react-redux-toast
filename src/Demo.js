import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToastsContainer from './ToastsContainer';
import './Demo.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        dismiss: 2000,
        message: 'Text example',
        alert: 'alert-primary',
        position: 'top-center',
      },
    };

    this.onClickAddToast = this.onClickAddToast.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onClickAddToast() {
    this.props.addToast(this.state.fields);
  }

  onChangeInput(e) {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  render() {
    return (
      <div>
        <ToastsContainer />
        <h1 className="title-toasts">Toasts</h1>
        <div className="container">
          <form>
            <label htmlFor="message">
              <span>Message:</span>
              <input id="message" type="text" placeholder="Message" name="message" onChange={this.onChangeInput} value={this.state.fields.message} />
            </label>
            <label htmlFor="dismiss">
              <span>Dismiss:</span>
              <input id="dismiss" type="number" placeholder="2000ms" name="dismiss" onChange={this.onChangeInput} value={this.state.fields.dismiss} />
            </label>
            <label htmlFor="alert">
              <span>Alert:</span>
              <select id="alert" onChange={this.onChangeInput} name="alert" value={this.state.fields.alert}>
                <option value="alert-primary">primary</option>
                <option value="alert-success">success</option>
                <option value="alert-danger">danger</option>
                <option value="alert-warning">warning</option>
                <option value="alert-info">info</option>
              </select>
            </label>
            <label htmlFor="position">
              <span>Position:</span>
              <select id="position" onChange={this.onChangeInput} name="position" value={this.state.fields.position}>
                <option value="top-center">Top Center</option>
                <option value="top-left">Top Left</option>
                <option value="top-right">Top Right</option>
                <option value="bottom-center">Bottom Center</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="bottom-right">Bottom Right</option>
              </select>
            </label>
          </form>
          <button
            className="btn-ligth"
            onClick={this.onClickAddToast}
          >
            Push Notification
          </button>
        </div>
      </div>
    );
  }
}

Demo.propTypes = {
  addToast: PropTypes.func.isRequired,
};

export default Demo;
