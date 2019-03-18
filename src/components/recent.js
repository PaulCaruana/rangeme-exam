import React, { Component } from "react";
import { connect } from "react-redux";
import Photo from "./photo";
import getRecentPhotosListAction from "../store/actions/recent-photos-list";

class RecentPhotos extends Component {
  constructor(props) {
    super(props);
    const getMore = true;
    window.onscroll = () => {
      if (!getMore) return;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!getMore) return;
        this.props.getRecentList();
      }
    };
  }
  render() {
    //handle connection error
    const connectionError = this.props.connectionError
      ? this.props.errorMessage
      : this.props.loadingMessage;

    //handle photos list
    const recent = this.props.recent || [];

    const recentPhotoList = recent.length ? (
      recent.map(photo => {
        return (
          <div key={photo.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Photo photo={photo} coverStyle="list" />
          </div>
        );
      })
    ) : (
      <div className="col-md-4">{connectionError}</div>
    );
    return (
      <div className="container">
        <h1>Recent Photos</h1>
        <div>
          <div className="row">{recentPhotoList}</div>
        </div>
        <div className="loading">
          <h1>
            <div>
              Loading...
              <div className="loader" />
            </div>
          </h1>
          <h1 />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recent: state.photo,
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRecentList: data => dispatch(getRecentPhotosListAction(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentPhotos);
