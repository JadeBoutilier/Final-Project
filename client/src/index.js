import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleMapsProvider } from "./GoogleMapsContext";
import { SignInProvider } from "./SignInContext";
import { DesignersProvider } from "./DesignersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <SignInProvider>
      <DesignersProvider>
        <GoogleMapsProvider>
          <App />
        </GoogleMapsProvider>
      </DesignersProvider>
    </SignInProvider>
  // </React.StrictMode>
);
