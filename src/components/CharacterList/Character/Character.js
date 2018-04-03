import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addFavorites } from "../../../ducks/characters";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      species: "",
      planet: ""
    };
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

  render() {
    // console.log(this.state.species);
    // console.log(this.state.planet);
    const { name, birth, gender, addFavorites, loading, error } = this.props;
    const { species, planet } = this.state;
    return (
      <div>
        <h4>Name: {name}</h4>
        <p>Birth: {birth}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species} </p>
        <p>Planet: {planet}</p>
        <button
          onClick={() => addFavorites(name, birth, gender, species, planet)}
        >
          Add to Favorites
        </button>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addFavorites })(Character);
