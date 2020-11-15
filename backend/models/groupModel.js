const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const model = require("mongoose").model;

const groupschema = mongoose.Schema({
  event: [{ type:ObjectId,ref:"Event"}],
  members: [{type:ObjectId,ref:"User"}],
});

const Group = mongoose.model("groupModel", groupschema);

module.exports = Group;
