import React from "react";
import ImageItem from "./ImageItem";

const ImageList = (props) => {
    const renderList = (items) => items.map(
        (item, index) => <ImageItem id={index} key={item.title + index} item={item}/>,
    );

    if (props.items && props.items.length > 0 && props.items != null) {
        return <div className="row">{renderList(props.items)}</div>;
    }

    return <div></div>;
};

export default ImageList;
