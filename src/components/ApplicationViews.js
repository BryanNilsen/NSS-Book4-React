import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      {/* Notice the added `exact` attribute here */}
      <Route exact path="/animals" render={(props) => {
        return <AnimalList {...props} />
      }} />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail
          animalId={parseInt(props.match.params.animalId)}
          {...props} />
      }} />


      <Route exact path="/locations" render={(props) => {
        return <LocationList {...props} />;
      }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        return <LocationDetail
          locationId={parseInt(props.match.params.locationId)}
          {...props} />
      }} />


      <Route exact path="/employees" render={(props) => {
        return <EmployeeList {...props} />;
      }}
      />
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
        return <EmployeeDetail
          employeeId={parseInt(props.match.params.employeeId)}
          {...props} />
      }} />


      <Route exact path="/owners" render={(props) => {
        return <OwnerList {...props} />;
      }}
      />
      <Route path="/owners/:ownerId(\d+)" render={(props) => {
        return <OwnerDetail
          ownerId={parseInt(props.match.params.ownerId)}
          {...props} />
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;