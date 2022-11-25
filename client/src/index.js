import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleMapsProvider } from "./GoogleMapsContext";
import { SignInProvider } from "./SignInContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SignInProvider>
      <GoogleMapsProvider>
        <App />
      </GoogleMapsProvider>
    </SignInProvider>
  </React.StrictMode>
);
