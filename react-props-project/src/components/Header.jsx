import React from "react";
import PropTypes from "prop-types";

function Header({ welcome }) {
  return (
    <div className="header">
      <p>Welcome: {welcome}</p>
    </div>
  );
}

Header.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export default Header;
