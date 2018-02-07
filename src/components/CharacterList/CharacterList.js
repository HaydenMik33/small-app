import React, { Component } from "react";
import axios from "axios";
import Character from "./Character/Character";

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      count: 1,
      prev: false
    };
    this.grabNext = this.grabNext.bind(this);
    this.grabPrev = this.grabPrev.bind(this);
  }

  componentDidMount() {
    axios.get("/api/characters").then(res => {
      //   console.log(res);
      this.setState({
        list: res.data
      });
    });
  }

  grabPrev() {
    const { prev, count } = this.state;
    axios.get(`/api/characters/?page=${count - 1}`).then(res => {
      this.setState({
        list: res.data,
        count: count - 1
      });
    });
    if (count === 2) this.setState({ prev: !prev });
  }

  grabNext() {
    const { prev, count } = this.state;
    axios.get(`/api/characters/?page=${count + 1}`).then(res => {
      this.setState({
        list: res.data,
        count: count + 1,
        prev: true
      });
    });
  }

  render() {
    const { list, next, prev } = this.state;
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
        <button disabled={!prev} onClick={this.grabPrev}>
          Previous Characters
        </button>
        <button onClick={this.grabNext}>More Characters</button>
      </div>
    );
  }
}

export default CharacterList;
