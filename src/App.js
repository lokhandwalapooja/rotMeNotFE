import "./App.css";
import React from 'react';
import AppRouter from './router/router';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import Oux from './hoc/Oux/Oux';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Oux>
        <ToastContainer closeOnClick rtl={false} pauseOnFocusLoss transition={Flip} />
        <AppRouter {...this.props} />
      </Oux>
    );
  }
}


const mapStateToProps = (state) => ({
  token: state.authReducer.token
});

export default connect(mapStateToProps)(withRouter(App));

