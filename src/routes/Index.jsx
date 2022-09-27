import React from "react";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

function Index(props) {
  return <RouterProvider router={router} />;
}

export default Index;
