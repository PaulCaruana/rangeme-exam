import React from "react";
import ImageItem from "./ImageItem";

const ImageList = props => {
    const renderList = (props) => {
        return props.items.map( (item, index) => {return <ImageItem id={index} key={item.date_taken + item.title} item = {item} /> });
    }

    if(props.items && props.items != null){
        return <div class="row">{renderList(props)}</div>
    }

    return <div></div>;
}

export default ImageList;