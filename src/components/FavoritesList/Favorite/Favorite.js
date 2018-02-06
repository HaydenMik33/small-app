import React, { Component } from "react";
import axios from "axios";

class Favorite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      newName: this.props.name,
      newBirth: this.props.birth,
      newGender: this.props.gender,
      newSpecies: this.props.species,
      newPlanet: this.props.planet
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { id, confirmChanges } = this.props;
    const { newName, newBirth, newGender, newSpecies, newPlanet } = this.state;
    confirmChanges(id, newName, newBirth, newGender, newSpecies, newPlanet);
    this.toggleEdit();
  }

  render() {
    const { name, birth, gender, species, planet } = this.props;
    const { newName, newBirth, newGender, newSpecies, newPlanet } = this.state;
    const { edit } = this.state;

    return (
      <div>
        {!edit ? (
          <div>
            <h4>Name: {name}</h4>
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
      </div>
    );
  }
}
export default Favorite;
