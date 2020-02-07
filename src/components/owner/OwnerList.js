import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    return OwnerManager.getAll().then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div className="container-cards">
      {owners.map(owner => <OwnerCard />)}
    </div>
  );
};
export default OwnerList