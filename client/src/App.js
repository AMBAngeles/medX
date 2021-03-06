import React, { Component, Fragment } from "react";
import Menu from "./menucomponent/menu";
import { loadUser } from "./actions/authActions";
import Patient from "./dashboard/patient";
import { connect } from "react-redux";
import store from "./store";
import ClinicianNav from "./cliniciancomponent/clinicianNavbar";
import Admin from "./dashboard/admin";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const { isAuthenticated, patient, clinician, isLoading } = this.props.auth;
    if (
      this.props.auth.msg === "LOGOUT_ADMIN_SUCCESS" ||
      this.props.error.msg === "INVALID_TOKEN"
    ) {
      window.location.assign("/admin");
    }
    if (
      this.props.auth.msg === "LOGOUT_SUCCESS" ||
      this.props.error.msg === "INVALID_TOKEN" ||
      this.props.auth.msg === "SETUP_SUCCESS"
    ) {
      window.location.assign("/login");
    }

    if (isLoading) {
      return <Fragment></Fragment>;
    }

    return (
      <div>
        {isAuthenticated && patient ? (
          <Patient />
        ) : isAuthenticated && clinician ? (
          <ClinicianNav />
        ) : window.location.pathname === "/admin" ? (
          <Admin />
        ) : (
          <Menu />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps)(App);
