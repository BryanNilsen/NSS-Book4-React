import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationForm = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location object, invoke the LocationManager post method, and redirect to the full location list
  */
  const constructNewlocation = evt => {
    if (location.name === "" || location.address === "") {
      window.alert("Please input a location name and address");
    } else {
      setIsLoading(true);
      // Create the location and redirect user to location list
      LocationManager.post(location)
        .then(() => props.history.push("/locations"));
    }
  };

  return (
    <>
      <fieldset>
        <div className="formgrid">
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="name"
            placeholder="location name"
          />
          <label htmlFor="locationName">Name</label>
        </div>
        <div className="formgrid">
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="address"
            placeholder="location address"
          />
          <label htmlFor="locationAddress">Address</label>
        </div>
        <div className="alignRight">
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewlocation}
          >Submit</button>
        </div>
      </fieldset>
    </>
  );
};

export default LocationForm