const schema = require("mongoose").Schema;
const model = require("mongoose").model;

const groupschema = new schema({
  email: String,
  event: [{ body: String, date: Date }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const GroupModel = model("GroupModel", groupschema);

module.exports = GroupModel;
