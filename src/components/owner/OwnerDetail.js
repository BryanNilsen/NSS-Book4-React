import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "" });

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
        });
      });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner-male.svg")} alt="Owner" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
      </div>
    </div>
  );
}

export default OwnerDetail;