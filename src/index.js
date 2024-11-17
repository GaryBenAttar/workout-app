import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { RoutinesProvider } from "./contexts/routines.context";
import { SettingsProvider } from "./contexts/settings.context";
import { UserProvider } from "./contexts/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <SettingsProvider>
        <RoutinesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RoutinesProvider>
      </SettingsProvider>
    </UserProvider>
  </React.StrictMode>
);
