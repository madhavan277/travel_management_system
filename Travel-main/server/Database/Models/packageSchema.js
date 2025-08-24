const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name of place"],
  },
  desc: {
    type: String,
    minlength: [10, "Invalid Phone number"],
  },
  rating: {
    type: String,
    default: 0,
  },
  displayImg: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
