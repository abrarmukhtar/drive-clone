import React, { useContext } from "react";

import Signup from "../Components/authentication/Signup";
import Login from "../Components/authentication/Login";
import Profile from "../Components/authentication/Profile";
import ForgotPassword from "../Components/authentication/ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../Components/authentication/PrivateRoute";
import UpdateProfile from "../Components/authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";
export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />


          {/* Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/*Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
