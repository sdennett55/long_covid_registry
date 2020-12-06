const mongoose = require("mongoose");
const {createUser} = require('../../models/User');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

async function addUser(req, res) {
  try {
    createUser(req.body);
    return res.status(200).send('Success!');
  } catch (err) {
    console.log(err);
    return res.status(503).end('There was an error updating the database. Please try again later!', err);
  }
};

export default addUser;