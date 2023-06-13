const { default: mongoose } = require("mongoose");
require("dotenv").config();

const { MONGO_USER, MONGO_PASS } = process.env;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.zrtb0px.mongodb.net/ProjectCapstone?retryWrites=true&w=majority`;
const connection = mongoose
  .connect(URI, connectionParams)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

module.exports = connection;
