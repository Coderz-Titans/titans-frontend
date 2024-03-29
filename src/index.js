import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
