import React from "react";
import PropTypes from "prop-types";

function Button({ label }) {
  return (
    <div className="btn">
      <button>{label}</button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
