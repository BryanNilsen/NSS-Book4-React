import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner-male.svg")} alt="Owner" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.owner.name}</span>
        </h3>
        <p>Phone: {props.owner.phoneNumber}</p>
      </div>
    </div>
  );
};

export default OwnerCard;