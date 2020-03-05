import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Photo from "./Photo";
import useGlobalState from "../data/globalState";

const View = props => {
    const [images] = useGlobalState('images');
    const id = props.match.params.id;
    const image = images[id];
    image.id = id;
    return (
        <div className="container">
            <BreadCrumbs message="Selected image" />
            <div>
                <div  className="row">
                    <div className="col-4">
                        <Photo
                            id={id}
                            photo={image}
                            coverStyle="gallery"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View

