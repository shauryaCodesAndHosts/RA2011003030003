import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
export const serverBackend = "https://socketstorebackend.onrender.com/API/V1";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
