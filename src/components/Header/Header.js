import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    const { auth } = this.props;

    // handle logout to remove token
    const handleLogout = () => {
      localStorage.removeItem("token");
    };

    if (auth) {
      return (
        <>
          <li key="1" style={{ margin: "0 5px 0 15px" }}>
            Name: {auth.name}
          </li>
          <li key="3" style={{ margin: "0 5px 0 15px" }}>
            <a
              href="https://juice-box-api.onrender.com/api/v1/auth/logout"
              style={{ color: "#000", margin: "0 10px" }}
              onClick={handleLogout}
            >
              Logout
            </a>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <a
            href="https://juice-box-api.onrender.com/api/v1/auth/google"
            style={{ color: "#000", margin: "0 10px" }}
          >
            Login With Google
          </a>
        </li>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            App
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
