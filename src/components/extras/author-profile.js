import React from "react";
import { Link } from "react-router-dom";

const Author = props => {
  return (
    <div className="container">
      <h1>
        <Link to="/">Home </Link> > Author Profile
      </h1>
      <div>
        <div className="row">
          <div className="col-12 ">
            <div className="container">Author Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
