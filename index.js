const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const Students = require("./Routes/Students");
//C:\Program Files\MongoDB\Server\5.0\data\
app.use(express.json());
//
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4g4am.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Db connection established"))
  .catch((err) => console.log(err));

// mongoose.connection
//   .on("message", function (message) {
//     console.log(message.content);
//   })
//   .once("open", function () {
//     console.log("connected");
//   });
app.use("/students", Students);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
