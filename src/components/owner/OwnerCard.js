import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner-male.svg")} alt="Owner" />
        </picture>
        <h3>
          Name: <span className="card-petname">Owner 1</span>
        </h3>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  );
};

export default OwnerCard;