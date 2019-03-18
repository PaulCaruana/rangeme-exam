import React from "react";
import { Link } from "react-router-dom";

const Tags = props => {
  return (
    <div className="container">
      <h1>
        <Link to="/">Home </Link> > Photos by tag
      </h1>
      <div>
        <div className="row">
          <div className="col-12 ">
            <div className="container">Photos by tag</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
