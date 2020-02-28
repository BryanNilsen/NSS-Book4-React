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
import LocationWithEmployees from "./location/LocationWithEmployees";

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


const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>

      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />

      <Route path="/notFound" render={props => <NotFound {...props} />
      } />

      <Route exact path="/" render={props => {
        return <Home />;
      }}
      />

      <Route exact path="/animals" render={props =>
        // ternary example
        hasUser
          ? <AnimalList {...props} />
          : <Redirect to="/login" />
        // if (hasUser) {
        //   return <AnimalList {...props} />
        // } else {
        //   return <Redirect to="/login" />
        // }
      } />


      <Route path="/animals/:animalId(\d+)" render={(props) => {
        if (hasUser) {
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/new" render={(props) => {
        if (hasUser) {
          return <AnimalForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
      />


      <Route exact path="/locations" render={(props) => {
        return <LocationList {...props} />;
      }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        if (hasUser) {
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }
      } />
      <Route path="/locations/new" render={(props) => {
        if (hasUser) {
          return <LocationForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }
      } />
      <Route path="/locations/:locationId(\d+)/edit" render={props => {
        if (hasUser) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route path="/locations/:locationId(\d+)/details" render={(props) => {
        return <LocationWithEmployees {...props} />
      }} />


      <Route exact path="/employees" render={(props) => {
        if (hasUser) {
          return <EmployeeList {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }
      }
      />
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
        if (hasUser) {
          return <EmployeeDetail
            employeeId={parseInt(props.match.params.employeeId)}
            {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }
      } />
      <Route path="/employees/new" render={(props) => {
        if (hasUser) {
          return <EmployeeForm {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      } />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (hasUser) {
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
        if (hasUser) {
          return <OwnerList {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      }
      />
      <Route path="/owners/:ownerId(\d+)" render={(props) => {
        if (hasUser) {
          return <OwnerDetail
            ownerId={parseInt(props.match.params.ownerId)}
            {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      } />
      <Route path="/owners/new" render={(props) => {
        if (hasUser) {
          return <OwnerForm {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
      } />
      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
        if (hasUser) {
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