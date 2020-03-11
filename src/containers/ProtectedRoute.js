
import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import auth from "./auth";
 export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
    
        {...rest}
        render={(props) => {
            return auth.isAuthenticated() ?
            (<Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from:props.location,
                  error: "You need to login first!",
                },
              }}
            />
          );
        }}
      />
    );
  };
  export default ProtectedRoute
  