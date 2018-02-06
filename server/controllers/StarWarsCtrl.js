const axios = require("axios");
let list = [];

module.exports = {
  getCharacters: (req, res) => {
    if (!list.length) {
      axios
        .get("http://swapi.co/api/people")
        .then(characters => {
          list = characters.data.results;
          res.status(200).json(list);
        })
        .catch(err => res.status(500).json(err));
    } else {
      res.status(200).json(list);
    }
  },
  postCharacter: (req, res) => {
    const db = req.app.get("db");
    const { name, birth, gender, species, planet } = req.body;
    db
      .post_character([name, birth, gender, species, planet])
      .then(character => {
        res.status(200).json(character);
      })
      .catch(err => res.status(500).json(err));
  },
  getFavorites: (req, res) => {
    const db = req.app.get("db");
    db
      .get_favorites()
      .then(characters => {
        res.status(200).json(characters);
      })
      .catch(err => res.status(500).json(err));
  },
  updateCharacter: (req, res) => {
    const db = req.app.get("db");
    const { id, name, birth, gender, species, planet } = req.body;
    db
      .update_character([id, name, birth, gender, species, planet])
      .then(character => {
        res.status(200).json(character);
      })
      .catch(err => res.status(500).json(err));
  }
};
