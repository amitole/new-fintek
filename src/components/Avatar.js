import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
  const { name, imageUrl, job } = props;

  return (
    <div className="avatar">
      <img className="avatar-image" src={imageUrl} alt="Avatar" />
      <p className="avatar-name">{name}</p>
      <p className="avatar-job">{job}</p>
    </div>
  );
};

export default Avatar;
