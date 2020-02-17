import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location-1.svg")} alt="Location" />
        </picture>
        <h3>
          Location: <span className="card-petname">{props.location.name}</span>
        </h3>
        <p>Address: {props.location.address}</p>
      </div>
    </div>
  );
};

export default LocationCard;