import React from "react";

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
        <p>Animals:</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default EmployeeCard;