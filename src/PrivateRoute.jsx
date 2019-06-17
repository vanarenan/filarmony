import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { authenticationService } from './authentication.service';
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route {...rest} render={props => authenticationService.currentUserSubject.value 
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
  }/>)
}