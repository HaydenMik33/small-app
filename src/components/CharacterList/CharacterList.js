import React, { Component } from "react";
import axios from "axios";
import Character from "./Character/Character";

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get("/api/characters").then(res => {
      //   console.log(res);
      this.setState({
        list: res.data
      });
    });
  }
  render() {
    const { list } = this.state;
    console.log(list);
    let characters = list.map((character, index) => {
      return (
        <Character
          key={index}
          name={character.name}
          birth={character.birth_year}
          gender={character.gender}
          speciesUrl={character.species}
          homeworldUrl={character.homeworld}
        />
      );
    });
    return (
      <div className="App">
        <div className="App-intro">{characters}</div>
      </div>
    );
  }
}

export default CharacterList;
