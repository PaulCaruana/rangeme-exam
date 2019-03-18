import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./extras/tags-drop-down-menu";

const Photo = props => {
  const photo = props.photo;
  const src = props.coverStyle === "list" ? photo.url_q : photo.url_l;
  return (
    <div className={"photo transition shadow " + props.coverStyle}>
      <div className="featured transition shadow">
        <Link to={"/gallery/" + photo.id}>
          <img src={src} alt="featured" className="featured-image" />
        </Link>
      </div>
      <div className="photo-detail">
        <div className="title">
          <h4>
            <Link to={"/gallery/" + photo.id} className="photo-title">
              {photo.title}
            </Link>
            <span className="photo-by">by</span>
            <Link to={"/author/" + photo.id} className="photo-description">
              {photo.ownername}
            </Link>
          </h4>
        </div>
        <div className="detail">{photo.description._content}...</div>
        <div />
        <div className="tags">
          <DropDownMenu tags={photo.tags} />
        </div>
      </div>
    </div>
  );
};
export default Photo;
