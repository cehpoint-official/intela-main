import React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <HelmetProvider >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>
);
