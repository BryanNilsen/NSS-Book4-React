const remoteURL = "http://localhost:5002"


export default {
  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`)
      .then(result => result.json())
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(result => result.json())
  },
  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(resource, newAnimal) {
    return fetch(`${remoteURL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  update(resource, editedAnimal) {
    return fetch(`${remoteURL}/${resource}/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  // SPECIALTY FETCHES
  // EMPLOYEE with ANIMALS
  getWithAnimals(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
      .then(result => result.json())
  },
  // LOCATION with EMPLOYEES
  getWithEmployees(id) {
    return fetch(`${remoteURL}/locations/${id}?_embed=employees`)
      .then(result => result.json())
  },
}