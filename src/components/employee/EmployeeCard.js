import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee-male.svg")} alt="Employee" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.employee.name}</span>
        </h3>
        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details With Animals</button>
        <button type="button"
          onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default EmployeeCard;