const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://skynet:skynet@cluster0-n2jrk.mongodb.net/skynet?retryWrites=true&w=majority", 
{
  useNewUrlParser: true
}
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3333);