import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Author from "./components/extras/author-profile";
import Tags from "./components/extras/photos-by-tag";
import Gallery from "./components/gallery";
import Recent from "./components/recent";
import getRecentPhotosListAction from "./store/actions/recent-photos-list";

class App extends Component {
  componentDidMount() {
    this.props.getRecentList();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Recent} />
          <Route path="/gallery/:id" component={Gallery} />
          <Route path="/author/:id" component={Author} />
          <Route path="/tags/:id" component={Tags} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecentList: data => dispatch(getRecentPhotosListAction(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
