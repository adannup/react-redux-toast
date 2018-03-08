import { connect } from 'react-redux';
import { addToast } from './toastActions';
import Demo from './Demo';

const mapDispatchToProps = dispatch => ({
  addToast: toast => {
    dispatch(addToast(toast));
  },
});

const DemoContainer = connect(undefined, mapDispatchToProps)(Demo);
export default DemoContainer;
