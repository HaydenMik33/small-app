import React from "react";
import { NavLink as Link } from "react-router-dom";
import { connect } from "react-redux";
import { newTitle } from "../../ducks/characters";

function NavBar(props) {
  console.log(props);
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">{props.title} Characters</h1>
        <input onChange={e => props.newTitle(e.target.value)} />
        <Link to="/">Character List</Link>
        <Link to="/favorites">Favorites List</Link>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(mapStateToProps, { newTitle })(NavBar);
