import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFavorites, deleteFavorites } from "../../../ducks/characters";
import ChooseSide from "./ChooseSide/ChooseSide";

class Favorite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      newName: this.props.name,
      newBirth: this.props.birth,
      newGender: this.props.gender,
      newSpecies: this.props.species,
      newPlanet: this.props.planet,
      darkSide: false,
      lightSide: false
      // updatedText: ""
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSide = this.handleSide.bind(this);
  }

  toggleEdit() {
    const { edit } = this.state;
    this.setState({
      edit: !edit
    });
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  handleSubmit() {
    const { id, updateFavorites } = this.props;
    const { newName, newBirth, newGender, newSpecies, newPlanet } = this.state;
    updateFavorites(id, newName, newBirth, newGender, newSpecies, newPlanet);
    this.toggleEdit();
  }

  handleSide(val) {
    const { newName } = this.state;
    if (val === "dark") {
      this.setState({
        darkSide: true,
        lightSide: false
      });
      alert(`Welcome to the Dark Side ${newName}`);
    } else if (val === "light") {
      this.setState({
        darkSide: false,
        lightSide: true
      });
      alert(`Welcome to the Light Side ${newName}`);
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.name !== this.props.name) {
  //     this.setState({
  //       updatedText: "UPDATED NAME"
  //     });
  //   }
  // }

  render() {
    const {
      id,
      name,
      birth,
      gender,
      species,
      planet,
      deleteFavorites
    } = this.props;
    const {
      newName,
      newBirth,
      newGender,
      newSpecies,
      newPlanet,
      darkSide,
      lightSide,
      edit
    } = this.state;

    return (
      <div>
        <div>
          Side:{" "}
          {darkSide && !lightSide ? (
            <p>Dark Side</p>
          ) : lightSide && !darkSide ? (
            <p>Light Side</p>
          ) : (
            <p>Neutral</p>
          )}
          <ChooseSide handleSide={this.handleSide} />
        </div>
        {!edit ? (
          <div>
            <h4>
              {this.state.updatedText} Name: {name}
            </h4>
            <p>Birth: {birth}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species} </p>
            <p>Planet: {planet}</p>
            <br />
            <button onClick={this.toggleEdit}>Edit Character</button>
          </div>
        ) : (
          <div>
            <label>Name:</label>
            <input
              value={newName}
              onChange={e => this.handleChange("newName", e.target.value)}
            />
            <label>Birth:</label>
            <input
              value={newBirth}
              onChange={e => this.handleChange("newBirth", e.target.value)}
            />
            <label>Gender:</label>
            <input
              value={newGender}
              onChange={e => this.handleChange("newGender", e.target.value)}
            />
            <label>Species:</label>
            <input
              value={newSpecies}
              onChange={e => this.handleChange("newSpecies", e.target.value)}
            />
            <label>Planet:</label>
            <input
              value={newPlanet}
              onChange={e => this.handleChange("newPlanet", e.target.value)}
            />
            <button onClick={this.handleSubmit}>Save Changes</button>
          </div>
        )}
        <button onClick={() => deleteFavorites(id)}>Remove Character</button>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { updateFavorites, deleteFavorites })(
  Favorite
);
