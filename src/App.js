import React from "react";
import {HashRouter, Route} from "react-router-dom";
import SearchBar from "./components/SearchBar";
import View from "./components/View";
import "./App.scss";

const App = () => (
    <HashRouter>
        <div className="photo-flickr-app transition">
            <Route exact path="/" component={SearchBar}/>
            <Route path="/view/:id" component={View}/>
        </div>
    </HashRouter>
);

export default App;
