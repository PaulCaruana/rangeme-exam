import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./TagsDropdownMenu";

const Photo = props => {
  const id = props.id;
  const photo = props.photo;
  const src = props.coverStyle === "list" ? photo.media.m : photo.media.m;
  return (
    <div className={"photo transition shadow " + props.coverStyle}>
      <div className="featured transition shadow">
        <Link to={"/view/" + id}>
          <img src={src} alt="loading..." className="featured-image" />
        </Link>
      </div>
      <div className="photo-detail">
        <div className="title">
          <p>
            <div>{photo.title} <br/>&nbsp;&nbsp;<i>by:</i> {photo.author} <br/><i>&nbsp;&nbsp;taken on:</i> {new Date(photo.published).toLocaleString()}</div>
          </p>
          <br />
        </div>
        <div />
        <div className="tags">
          <DropDownMenu tags={photo.tags} />
        </div>
      </div>
    </div>
  );
};
export default Photo;
