import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import NotFound from "./NotFound/NotFound";

// animal imports
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';

// location imports
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from './location/LocationForm';
import LocationEditForm from './location/LocationEditForm';

// employee imports
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";

// owner imports
import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";
import OwnerForm from './owner/OwnerForm';
import OwnerEditForm from './owner/OwnerEditForm';


const ApplicationViews = () => {
  // Check if credentials are in session storage returns true/false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route path="/notFound" component={NotFound} />

      <Route exact path="/" render={props => {
        if (isAuthenticated()) {
          return <Home />;
        } else {
          return <Redirect to="/login" />
        }
      }}
      />

      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/animals/:animalId(\d+)" render={(props) => {
        if (isAuthenticated()) {
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/new" render={(props) => {
        if (isAuthenticated()) {
          return <AnimalForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
      />


      <Route exact path="/locations" render={(props) => {
        if (isAuthenticated()) {
          return <LocationList {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        if (isAuthenticated()) {
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }
      } />
      <Route path="/locations/new" render={(props) => {
        if (isAuthenticated()) {
          return <LocationForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }
      } />
      <Route path="/locations/:locationId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
      />


      <Route exact path="/employees" render={(props) => {
        if (isAuthenticated()) {
          return <EmployeeList {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }
      }
      />
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
        if (isAuthenticated()) {
          return <EmployeeDetail
            employeeId={parseInt(props.match.params.employeeId)}
            {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }
      } />
      <Route path="/employees/new" render={(props) => {
        if (isAuthenticated()) {
          return <EmployeeForm {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      } />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />


      <Route exact path="/owners" render={(props) => {
        if (isAuthenticated()) {
          return <OwnerList {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      }
      />
      <Route path="/owners/:ownerId(\d+)" render={(props) => {
        if (isAuthenticated()) {
          return <OwnerDetail
            ownerId={parseInt(props.match.params.ownerId)}
            {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      } />
      <Route path="/owners/new" render={(props) => {
        if (isAuthenticated()) {
          return <OwnerForm {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      } />
      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
      />

    </React.Fragment>
  );
};

export default ApplicationViews;