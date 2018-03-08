import { connect } from 'react-redux';
import { removeToast } from './toastActions';
import Toast from './Toast';

// const mapDispatchToProps = dispatch => ({
//   removeToast: id => {
//     dispatch(removeToast(id));
//   },
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeToast: () => {
    dispatch(removeToast(ownProps.id));
  },
});

const ToastContainer = connect(undefined, mapDispatchToProps)(Toast);

export default ToastContainer;
