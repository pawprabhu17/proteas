import React from "react";
import { Redirect, Route } from "react-router-dom";
const Error = () => {
  return (
    <div className="container m-5">
      {alert("Error : This Path Doesn't Exist!!")}
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </div>
  );
};

export default Error;
