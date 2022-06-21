import React from "react";
import ReactDOM from "react-dom";
import {Login} from "./Login";
import { LandingPage } from "./LandingPage";
import { AuthProvider } from "oidc-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";

const oidcConfig = {
  onSignIn: async (user) => {
    console.log("Printing User from App.jsx", user);
    window.location.hash = '';
  },
  authority: 'https://accounts.google.com',
  clientId: "69599350005-ea9jugb6i6ub30jucd1sjsgmgk4jijrc.apps.googleusercontent.com",
  responseType: "id_token",
  scope: "openid profile email",
  redirectUri: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://anujmenta.github.io/pyposal_backend/',
  postLogoutRedirectUri: "https://anujmenta.github.io/pyposal_backend/",
};

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route path="/login" element = {<AuthProvider {...oidcConfig}><Login/></AuthProvider>}/>
    </Routes>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
