const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://Haechan:at7x23112560@boilerplate.r8ina.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) =>
  res.send("Hello World! Node Express MongoDB Mongoose")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
