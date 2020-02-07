import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee-male.svg")} alt="Employee" />
        </picture>
        <h3>
          Name: <span className="card-petname">John Smith</span>
        </h3>
        <p>Title: Manager</p>
      </div>
    </div>
  );
};

export default EmployeeCard;