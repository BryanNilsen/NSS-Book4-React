import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        if (!owner.name) {
          props.history.push("/notFound")
        } else {
          setOwner({
            name: owner.name,
          });
          setIsLoading(false);
        }
      });
  }, [props.ownerId, props.history]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner-male.svg")} alt="Owner" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.locationId}/edit`)}>
          Edit
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove Owner
        </button>
      </div>
    </div>
  );
}

export default OwnerDetail;