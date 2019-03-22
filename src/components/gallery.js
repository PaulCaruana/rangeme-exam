import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Photo from "./utilities/photo";

class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <Link to="/">Home </Link> > Photo info
        </h1>
        <div>
          <div className="row">
            <div className="col-12 ">
              <Photo
                key={this.props.photo.id}
                photo={this.props.photo}
                coverStyle="gallery"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    photo: state.photo.find(photo => photo.id === id)
  };
};

export default connect(mapStateToProps)(Gallery);
