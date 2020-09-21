const express = require("express");
const mongoose = require("mongoose");
const { PORT, DB } = require("./keys");

const app = express();

//connecting to db
const db = DB;
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
//bodyparser middleware
app.use(express.json());
//routes middleware
app.use(require("./routes/auth"));
app.listen(PORT, () => console.log(`listening to post ${PORT}`));
