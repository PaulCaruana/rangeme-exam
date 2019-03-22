//@ts-check
import React, { Component } from "react";
import { connect } from "react-redux";
import searchPhotos from "../store/actions/search-photos-action";
import updateResultPage from "../store/actions/update-result-action";
import { getUnique, handleOnScroll } from "./utilities/functions";
import Photo from "./utilities/photo";

class RecentPhotos extends Component {
  state = {
    updating: 0,
    search: {
      method: 0,
      text: "",
      tags: "",
      page: this.props.page || 1
    }
  };

  infiniteScroll() {
    if (handleOnScroll()) {
      this.setState({ ...this.state, updating: 1 });
      this.props.updatePage(this.state.search);
    }
  }

  resetInfiniteScroll() {
    this.setState({ ...this.state, updating: 0 });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {});
  }

  componentDidMount() {
    this.props.getSearchResult({
      method: 0,
      text: "",
      tags: "",
      page: 1
    });
    window.onscroll = () => {
      if (!this.state.updating) return this.infiniteScroll();
    };
    this.props.getSearchResult();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.resetInfiniteScroll();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.pageID) {
      this.props.getSearchResult();
    }
  }
  render() {
    //handle connection error
    const connectionError = this.props.connectionError
      ? this.props.errorMessage
      : this.props.loadingMessage;

    //handle photos list
    const result = this.props.result || [];

    const recentPhotoList = result.length ? (
      result.map(photo => {
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
        <h1>Recent photos</h1>

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

const mapStateToProps = state => {
  return {
    result: getUnique(state.photo, "id"),
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage,
    page: state.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePage: () => dispatch(updateResultPage()),
    getSearchResult: () => dispatch(searchPhotos())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentPhotos);
