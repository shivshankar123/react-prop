import React from "react";
import PropTypes from "prop-types";

function Profile({ name, age, bio }) {
  return (
    <div className="profile">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default Profile;
