import React, {useState, useEffect, useContext} from "react";
import {HashRouter, Route} from "react-router-dom";
import "./App.scss";
import Gallery from "./components/containers/view";
import SearchBar from "./components/presentations/searchBar";


const App = props => {
    return (
            <HashRouter>
                <div className="photo-flickr-app transition">
                    <Route exact path="/" component={SearchBar}/>
                    <Route path="/gallery/:id" component={Gallery}/>
                </div>
            </HashRouter>

    );
};

export default App;
