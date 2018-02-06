import React, { Component } from "react";
import axios from "axios";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      species: "",
      planet: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    const { speciesUrl, homeworldUrl } = this.props;
    axios.get(`${speciesUrl[0]}`).then(res => {
      this.setState({
        species: res.data.name
      });
    });
    axios.get(`${homeworldUrl}`).then(res => {
      this.setState({
        planet: res.data.name
      });
    });
  }

  handleAdd(name, birth, gender, species, planet) {
    axios.post("/api/favorites/add", {
      name,
      birth,
      gender,
      species,
      planet
    });
  }

  render() {
    // console.log(this.state.species);
    // console.log(this.state.planet);
    const { name, birth, gender } = this.props;
    const { species, planet } = this.state;
    return (
      <div>
        <h4>Name: {name}</h4>
        <p>Birth: {birth}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species} </p>
        <p>Planet: {planet}</p>
        <button
          onClick={() => this.handleAdd(name, birth, gender, species, planet)}
        >
          Add to Favorites
        </button>
        <br />
      </div>
    );
  }
}
export default Character;
