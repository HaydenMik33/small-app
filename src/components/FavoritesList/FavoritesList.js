import React, { Component } from "react";
import { connect } from "react-redux";
import { getFavorites } from "../../ducks/characters";
import Favorite from "./Favorite/Favorite";

class FavoritesList extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    const { favorites = [], loading } = this.props;
    let list = favorites.map((character, index) => {
      return (
        <Favorite
          key={character.favorites_id}
          name={character.name}
          birth={character.birth}
          gender={character.gender}
          species={character.species}
          planet={character.planet}
          id={character.favorites_id}
        />
      );
    });
    return <div>{loading ? <h6>Page Loading</h6> : list}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getFavorites
})(FavoritesList);
