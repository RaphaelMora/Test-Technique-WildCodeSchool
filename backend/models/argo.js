const mongoose = require("mongoose");

const argoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("argo", argoSchema);
