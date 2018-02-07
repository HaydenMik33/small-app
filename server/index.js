const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3001;
const app = express();
const StarWarsCtrl = require("./controllers/StarWarsCtrl");

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.log);

app.use(express.static(`${__dirname}/../build`));

app.use(json());
app.use(cors());

app.get("/api/characters", StarWarsCtrl.getCharacters);
app.post("/api/favorites/add", StarWarsCtrl.postCharacter);
app.get("/api/favorites", StarWarsCtrl.getFavorites);
app.put("/api/favorites/update", StarWarsCtrl.updateCharacter);
app.delete("/api/favorites/:id", StarWarsCtrl.removeCharacter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
