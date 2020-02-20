import React, { useState } from "react"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", remember: false });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleCheckbox = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.checked;
    setCredentials(stateToChange)
  }

  const handleLogin = (e) => {
    // check if user selected 'Remember Me' for local storage
    // clear any prior data saved to session or local storage
    if (credentials.remember) {
      sessionStorage.clear()
      localStorage.setItem(
        "credentials",
        JSON.stringify(credentials)
      );
    } else {
      localStorage.clear()
      sessionStorage.setItem(
        "credentials",
        JSON.stringify(credentials)
      );
    }
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
        <input onChange={handleCheckbox} type="checkbox"
          id="remember" defaultChecked={credentials.remember} />
        <label htmlFor="remember">Remember Me</label>
      </div>
      <button type="submit" onClick={handleLogin}>Sign in</button>
    </fieldset>
  );
};

export default Login;