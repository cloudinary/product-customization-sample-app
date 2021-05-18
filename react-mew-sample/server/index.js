const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: "Hey! This is your server response!" });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
