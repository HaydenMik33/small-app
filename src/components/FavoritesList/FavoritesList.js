import React, { Component } from "react";
import axios from "axios";
import Favorite from "./Favorite/Favorite";

class FavoritesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.confirmChanges = this.confirmChanges.bind(this);
  }

  componentDidMount() {
    axios.get("/api/favorites").then(res => {
      this.setState({
        list: res.data
      });
    });
  }

  confirmChanges(id, name, birth, gender, species, planet) {
    axios
      .put("/api/favorites/update", {
        id,
        name,
        birth,
        gender,
        species,
        planet
      })
      .then(res => {
        this.setState({
          list: res.data
        });
      });
  }

  render() {
    const { list } = this.state;
    console.log(list);
    let favorites = list.map((character, index) => {
      return (
        <Favorite
          key={index}
          name={character.name}
          birth={character.birth}
          gender={character.gender}
          species={character.species}
          planet={character.planet}
          id={character.favorites_id}
          confirmChanges={this.confirmChanges}
        />
      );
    });
    return <div>{favorites}</div>;
  }
}

export default FavoritesList;
