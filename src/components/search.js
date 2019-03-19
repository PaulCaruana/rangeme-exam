import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import searchPhotos from "../store/actions/search-photos-action";
import updateResultPage from "../store/actions/update-result-action";
import Photo from "./photo";

class Search extends Component {
  constructor(props) {
    super(props);
    const getMoreResult = true;
    window.onscroll = () => {
      if (!getMoreResult) return;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!getMoreResult) return;
        this.props.updatePage({
          method: 1,
          text: this.props.tagID,
          tags: ""
        });
      }
    };
  }
  componentDidMount() {
    this.props.getSearchResult({
      method: 1,
      text: this.props.tagID,
      tags: ""
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.tagID) {
      this.props.getSearchResult({
        method: 1,
        text: nextProps.match.params.id,
        tags: ""
      });
    }
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
        <h1>
          <Link to="/">Home </Link> > Search result
        </h1>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tagID: ownProps.match.params.id,
    recent: state.photo,
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSearchResult: data => dispatch(searchPhotos(data)),
    updatePage: data => dispatch(updateResultPage(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
