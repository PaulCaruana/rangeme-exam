import React from "react";
import { Link } from "react-router-dom";

const DropDownMenu = props => {
  return (
    <nav className="photo-tags">
      <nav className="tag">Tags + </nav>
      <ul className="drop-down-tags transition shadow">
        {props.tags.split(" ").map(tag => (
          <li key={tag}>
            <Link to={"/tags/" + tag}>{tag}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DropDownMenu;
