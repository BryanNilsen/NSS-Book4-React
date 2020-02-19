import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create owner object, invoke the OwnerManager post method, and redirect to the full owner list
  */
  const constructNewOwner = evt => {
    if (owner.name === "") {
      window.alert("Please input an owner name");
    } else {
      setIsLoading(true);
      // Create the owner and redirect user to owner list
      OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
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
            placeholder="owner name"
          />
          <label htmlFor="ownerName">Name</label>
        </div>
        <div className="alignRight">
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewOwner}
          >
            Submit
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default OwnerForm