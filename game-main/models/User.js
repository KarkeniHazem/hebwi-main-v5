const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  team: {
    TOP: schema.Types.Mixed,
    MID: schema.Types.Mixed,
    JUNGLE: schema.Types.Mixed,
    ADC: schema.Types.Mixed,
    SUPPORT: schema.Types.Mixed,
  },
});
module.exports = mongoose.model("user", UserSchema);
