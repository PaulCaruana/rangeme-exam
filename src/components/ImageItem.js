import React from "react";
import "./ImageItem.css";
import Photo from "./Photo";

const ImageItem = props => {
    return (
        <div
            key={props.id}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 transition"
        >
            <Photo id={props.id} photo={props.item} coverStyle="list" />
        </div>
/*
        <div className="card">
            <div className="card-block">
                <Link to={"/view/" + props.id} className="photo-title">
                    <h6 className="card-title">{ props.item.title}</h6>
                </Link>
            </div>
            <Link to={"/view/" + props.id} className="photo-title">
                <img className="card-img-bottom card-img" src={props.item.media.m} alt="{props.item.title}" />
            </Link>
        </div>
*/
    );
};

export default ImageItem;
