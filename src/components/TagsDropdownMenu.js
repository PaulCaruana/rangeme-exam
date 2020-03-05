import React from "react";

const DropDownMenu = props => {
  const tags = props.tags.split(" ");
  return (
    <nav className="photo-tags">
      <nav className="tag">Tags + </nav>
      <ul className="drop-down-tags transition shadow">
        {tags[0] !== "" ? (
          tags.map(tag => (
            <li key={tag}>
              {tag}
            </li>
          ))
        ) : (
          <li>no tags</li>
        )}
      </ul>
    </nav>
  );
};

export default DropDownMenu;
