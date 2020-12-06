const mongoose = require("mongoose");
const {getUserInfo} = require('../../models/User');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

async function getPublicInfo(req, res) {
  try {
    const userInfo = await getUserInfo();
    return res.status(200).send(userInfo);
  } catch (err) {
    console.log(err);
    return res.status(503).end('There was an error accessing the database. Please try again later!', err);
  }
};

export default getPublicInfo;