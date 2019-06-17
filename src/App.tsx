import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { authenticationService } from "./authentication.service";

import { Header } from "./Header";
import { LoginPage } from "./Login";
import { PrivateRoute } from "./PrivateRoute";

import { HomePage } from "./HomePage";

type State = {
  currentUser: any;
};
const initialState = { currentUser: null };

export class App extends Component<any, State, any> {
  readonly state: State = initialState;
  subscribtion: any;

  componentDidMount() {
    this.subscribtion = authenticationService.currentUserSubject.subscribe(
      (user: any) => this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.subscribtion.unsubscribe();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        { currentUser && <Header /> }
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute path="/" exact component={HomePage} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    );
  }
}