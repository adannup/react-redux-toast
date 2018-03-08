import { connect } from 'react-redux';
import { addToast } from './toastActions';
import Demo from './Demo';

const mapDispatchToProps = dispatch => ({
  addToast: (message, dismiss, alert, position) => {
    dispatch(addToast(message, dismiss, alert, position));
  },
});

const DemoContainer = connect(undefined, mapDispatchToProps)(Demo);
export default DemoContainer;
