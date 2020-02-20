import React, { useState } from "react"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(credentials)
    );
    props.history.push("/");
  }

  return (
    <fieldset>
      <h3>Please sign in</h3>
      <div className="formgrid">
        <input onChange={handleFieldChange} type="email"
          id="email"
          placeholder="Email address"
          required="" autoFocus="" />
        <label htmlFor="inputEmail">Email address</label>

        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" />
        <label htmlFor="inputPassword">Password</label>
      </div>
      <button type="submit" onClick={handleLogin}>Sign in</button>
    </fieldset>
  );
};

export default Login;