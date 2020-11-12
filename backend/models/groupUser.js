const schema = require("mongoose").Schema;
const model = require("mongoose").model;

const groupschema = new schema({
  email: String,
  event: [{ body: String, date: Date }],
  members: [String],
});

const GroupModel = model("GroupModel", groupschema);

module.exports = GroupModel;
