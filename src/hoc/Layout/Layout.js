import React, { Component } from "react";
import Aux from "../Oux/Oux";
import { withRouter, NavLink } from "react-router-dom";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { connect } from "react-redux";
// import * as actions from '../../redux/actions';

import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        {this.props.children}
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
