import React from "react";

const NotFound = (props) => {
  const goBack = () => {
    props.history.go(-2)
  }

  return (
    <picture>
      <span onClick={() => goBack()}>
        <img src={require('./404error.jpg')} alt="Not Found" />
      </span>
    </picture>
  );
};

export default NotFound;