import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import searchPhotos from "../store/actions/search-photos-action";
import updateResultPage from "../store/actions/update-result-action";
import Photo from "./extras/photo";

class Search extends Component {
  state = {
    updating: 0,
    search: {
      method: 1,
      text: this.props.tagID,
      tags: "",
      page: this.props.page || 1
    }
  };

  handleOnScroll() {
    if (this.state.updating === 1) return;
    let scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    let scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    let clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      this.setState({ ...this.state, updating: 1 });
      this.props.updatePage(this.state.search);
    }
  }

  resetUpdating() {
    this.setState({ ...this.state, updating: 0 });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOnScroll);
  }

  componentDidMount() {
    window.onscroll = () => {
      this.handleOnScroll();
    };
    this.props.getSearchResult(this.state.search);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.resetUpdating();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.tagID) {
      this.setState({
        ...this.state,
        search: {
          method: 1,
          text: nextProps.match.params.id,
          tags: "",
          page: 1
        }
      });
      this.props.getSearchResult(this.state.search);
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
