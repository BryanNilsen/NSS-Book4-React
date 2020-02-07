import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location-1.svg")} alt="Location" />
        </picture>
        <h3>
          Location: <span className="card-petname">Location 1</span>
        </h3>
        <p>Address: 123 Plus Park Drive</p>
      </div>
    </div>
  );
};

export default LocationCard;