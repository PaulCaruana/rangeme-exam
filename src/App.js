import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Gallery from "./components/gallery";
import Recent from "./components/recent";
import Search from "./components/search";
import Tags from "./components/tags";
import Author from "./components/utilities/author-profile";
import SearchBar from "./components/utilities/search-bar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="photo-flickr-app transition">
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
