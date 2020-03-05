import React from "react";
import Photo from "./Photo";
import "./ImageItem.css";

const ImageItem = props => {
    return (
        <div
            key={props.id}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 transition"
        >
            <Photo id={props.id} photo={props.item} coverStyle="list" />
        </div>
    );
};

export default ImageItem;
