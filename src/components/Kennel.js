import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";
import Modal from "./modal/Modal";
import useModal from './modal/useModal';

const Kennel = (props) => {
  const { isShowing, toggle } = useModal();
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
    setHasUser(isAuthenticated());
  }

  const setUser = user => {
    if (user.remember) {
      sessionStorage.clear()
      localStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
    } else {
      localStorage.clear()
      sessionStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
    };
  }

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <div className="App">
        <button className="button-default" onClick={toggle}>Show Modal</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          {...props}
        />
      </div>
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default withRouter(Kennel);