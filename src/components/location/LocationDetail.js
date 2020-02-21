import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        if (!location.name) {
          props.history.push("/notFound")
        } else {
          setLocation({
            name: location.name,
            address: location.address
          });
          setIsLoading(false);
        }
      });
  }, [props.locationId, props.history]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location-1.svg")} alt="Location" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <h3>Address: <span style={{ color: 'darkslategrey' }}>{location.address}</span></h3>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.locationId}/edit`)}>
          Edit
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close Location
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;