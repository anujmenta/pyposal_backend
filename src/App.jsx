import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import { AuthProvider } from "oidc-react";

import "./index.scss";

// const oidcConfig = {
//   onSignIn: async (user) => {
//     console.log("user", user);
//     alert("user signed in");
//     window.location.has = '';
//   },
//   authority: "https://www.pushbullet.com/authorize/",
//   clientId: "95JrEmveXLKNN7lx8fp7pdBVeWLVtttf",
//   responseType: "token",
//   scope: "everything",
//   redirectUri: "http://localhost:8080/callback",
//   postLogoutRedirectUri: "http://localhost:8080/",
// }

const oidcConfig = {
  onSignIn: async (user) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.hash = '';
  },
  authority: 'https://accounts.google.com',
  clientId: "69599350005-ea9jugb6i6ub30jucd1sjsgmgk4jijrc.apps.googleusercontent.com",
  responseType: "id_token",
  scope: "openid",
  redirectUri: "https://anujmenta.github.io/pyposal_backend/",
  postLogoutRedirectUri: "https://anujmenta.github.io/pyposal_backend/",
};

const App = () => (
  <AuthProvider {...oidcConfig}>
  <Login/>
  </AuthProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
