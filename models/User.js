const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  dob: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  weeksLasted: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  vitamins: {
    type: String,
    required: true,
  },
  preexistingConditions: {
    type: Array,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
    default: false,
  },
  dateModified: {
    type: String,
    required: true,
  }
});

// User Class
const User = mongoose?.models?.User || mongoose.model('User', UserSchema);

// Create a new User
async function createUser(state) {
  // Instance of User class
  const user = new User(state);

  try {
    await user.save();
    return;
  } catch (err) {
    console.error('There was an issue saving to the database...', err);
  }
}

async function getUserInfo() {
  try {
    const userInfo = await User.find({}).select({ preexistingConditions: 1, dob: 1, startDate: 1, weeksLasted: 1, sex: 1, bloodType: 1, location: 1, vitamins: 1, symptoms: 1, dateModified: 1 });
    const userInfoWithAge = userInfo.map(({ preexistingConditions, dob, startDate, weeksLasted, sex, bloodType, location, vitamins, symptoms, dateModified }) => {
      const age = Math.floor((new Date(dateModified).getTime() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365));
      return { preexistingConditions, dob, startDate, weeksLasted, sex, bloodType, location, vitamins, symptoms, age };
    }).reverse();
    return userInfoWithAge;
  } catch (err) {
    console.error(
      'There was an issue trying to access public user info: ',
      err.message
    );
  }
}

module.exports.createUser = createUser;
module.exports.getUserInfo = getUserInfo;