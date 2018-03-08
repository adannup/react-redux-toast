import { connect } from 'react-redux';
import Toasts from './Toasts';

const mapStateToProps = state => ({
  toasts: state.toasts,
});

const ToastsContainer = connect(mapStateToProps, undefined)(Toasts);

export default ToastsContainer;
