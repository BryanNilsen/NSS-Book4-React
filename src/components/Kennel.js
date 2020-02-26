import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    if (!user) {
      setHasUser(isAuthenticated())
    } else if (user.remember) {
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
      <NavBar hasUser={hasUser} setUser={setUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;