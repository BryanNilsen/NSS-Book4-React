import React from "react";
import { Link } from "react-router-dom";


const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location-1.svg")} alt="Location" />
        </picture>
        <h3>
          Location: <span className="card-petname">{props.locationObject.name}</span>
        </h3>
        <p>Address: {props.locationObject.address}</p>
        <Link to={`/locations/${props.locationObject.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => { props.history.push(`/locations/${props.locationObject.id}/details`) }}>Details With Employees</button>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.locationObject.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.locationObject.id)}>Close Location</button>
      </div>
    </div>
  );
};

export default LocationCard;