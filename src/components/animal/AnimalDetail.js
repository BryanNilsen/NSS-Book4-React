import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'
import { firstLetterCase } from '../../modules/helpers'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        if (!animal.name) {
          props.history.push("/notFound")
        } else {
          setAnimal({
            name: animal.name,
            breed: animal.breed
          });
          setIsLoading(false);
        }
      });
  }, [props.animalId, props.history]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(animal.name)}</span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button"
          onClick={() => props.history.push(`/animals/${props.animalId}/edit`)}>
          Edit
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;