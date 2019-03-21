import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Author from "./components/extras/author-profile";
import SearchBar from "./components/extras/search-bar";
import Gallery from "./components/gallery";
import Recent from "./components/recent";
import Search from "./components/search";
import Tags from "./components/tags";

class App extends Component {
  componentDidMount() {
    //this.props.getSearchResult();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={SearchBar} />
          <Route exact path="/" component={Recent} />
          <Route path="/gallery/:id" component={Gallery} />
          <Route path="/author/:id" component={Author} />
          <Route path="/search/:id" component={Search} />
          <Route path="/tags/:id" component={Tags} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
