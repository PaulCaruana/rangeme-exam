import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import searchPhotos from "../store/actions/search-photos-action";
import updateResultPage from "../store/actions/update-result-action";
import { getUnique, handleOnScroll } from "./utilities/functions";
import Photo from "./utilities/photo";

class Search extends Component {
  state = {
    updating: 0,
    search: {
      method: 1,
      text: this.props.pageID,
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
      method: 1,
      text: this.props.pageID,
      tags: "",
      page: 1
    });
    window.onscroll = () => {
      if (!this.state.updating) return this.infiniteScroll();
    };
    this.props.getSearchResult(this.state.search);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.resetInfiniteScroll();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.pageID) {
      this.setState({
        ...this.state,
        search: {
          method: 1,
          text: nextProps.match.params.id,
          tags: "",
          page: 1
        }
      });
      this.props.getSearchResult({
        method: 1,
        text: nextProps.match.params.id,
        tags: "",
        page: 1
      });
    }
  }

  render() {
    //handle connection error
    const connectionError = this.props.connectionError
      ? this.props.errorMessage
      : this.props.loadingMessage;

    //handle photos list
    const recent = this.props.result || [];
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
          <Link to="/">Home </Link> > Search result for '
          {this.state.search.text}'
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
    pageID: ownProps.match.params.id,
    result: getUnique(state.photo, "id"),
    page: state.page,
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
