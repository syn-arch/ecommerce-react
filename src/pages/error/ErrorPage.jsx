import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage(props) {
  const error = useRouteError();
  return (
    <div className="flex h-screen w-100 justify-center items-center flex-col text-center">
      <h1 className="text-5xl mb-5">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="italic">{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
