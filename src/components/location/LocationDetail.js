import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location-1.svg")} alt="Location" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <h3>Address: <span style={{ color: 'darkslategrey' }}>{location.address}</span></h3>
      </div>
    </div>
  );
}

export default LocationDetail;