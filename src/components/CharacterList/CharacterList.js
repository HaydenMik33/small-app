import React, { Component } from "react";
import { connect } from "react-redux";
import { getCharacters, getPage } from "../../ducks/characters";
import Character from "./Character/Character";

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      prev: false
    };
    this.grabNext = this.grabNext.bind(this);
    this.grabPrev = this.grabPrev.bind(this);
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  grabPrev() {
    const { prev, count } = this.state;
    this.props.getPage(count - 1);
    this.setState({
      count: count - 1
    });
    if (count === 2) this.setState({ prev: !prev });
  }

  grabNext() {
    const { count } = this.state;
    this.props.getPage(count + 1);
    this.setState({
      count: count + 1,
      prev: true
    });
  }

  render() {
    console.log(this.props);
    const { prev } = this.state;
    const { characters = [], loading } = this.props;
    let list = characters.map((character, index) => {
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
        <div className="App-intro">{list}</div>
        {loading ? (
          <h6>Page Loading</h6>
        ) : (
          <div>
            <button disabled={!prev} onClick={this.grabPrev}>
              Previous Characters
            </button>
            <button onClick={this.grabNext}>More Characters</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

export default connect(mapStateToProps, { getCharacters, getPage })(
  CharacterList
);

//Conect function is listening to each change in the state.
//When change occurs, it calls the function mapStateToProps(),
//Within mapStateToProps() we specify exactly which parts of the state we want to provide to this component.
