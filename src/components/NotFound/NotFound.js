import React from "react";

const NotFound = () => {
  return (
    <picture>
      <img src={require('./404error.jpg')} alt="Not Found" />
    </picture>
  );
};

export default NotFound;