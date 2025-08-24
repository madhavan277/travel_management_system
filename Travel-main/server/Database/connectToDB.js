const mongoose = require("mongoose");

const connectToMongo = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to Database 😃");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToMongo;
