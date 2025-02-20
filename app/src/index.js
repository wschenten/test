import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./cube"; /* name of the file containing the component */
/* App is a special function to integrate components, it shouldn't be modified
only the nameof the file containing the component */
const root = createRoot(document.getElementById("root")); 
// render of the HTML below
root.render(
  <StrictMode>
    <App /> 
  </StrictMode>
);