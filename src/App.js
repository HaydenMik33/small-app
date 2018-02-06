import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList/CharacterList";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={CharacterList} />
        <Route path="/favorites" component={FavoritesList} />
      </div>
    );
  }
}

export default App;
