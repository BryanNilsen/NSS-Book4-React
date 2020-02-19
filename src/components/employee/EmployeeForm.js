import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create employee object, invoke the EmployeeManager post method, and redirect to the full employee list
  */
  const constructNewemployee = evt => {
    evt.preventDefault();
    if (employee.Name === "") {
      window.alert("Please input an employee name");
    } else {
      setIsLoading(true);
      // Create the employee and redirect user to employee list
      EmployeeManager.post(employee)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="employee name"
            />
            <label htmlFor="employeeName">Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewemployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm