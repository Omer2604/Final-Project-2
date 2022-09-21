const User = require("../Routers/Users/userModel");
const chalk = require("chalk");
const { generateHashPassword } = require("../services/bcrypt");

const data = {
  users: [
    {
      name: "user",
      email: "user@gmail.com",
      password: 123456,
      biz: false,
    },
    // {
    //   name: "admin",
    //   email: "admin@gmail.com",
    //   password: 123456,
    //   biz: true,
    //   isAdmin: true,
    // },
    // {
    //   name: "business",
    //   email: "business@gmail.com",
    //   password: 123456,
    //   biz: true,
    //   isAdmin: false,
    // },
  ],
  photos: [
    {
      title: "סופגניות",
      description: "סופגניות עבור חנוכה בלבד",
      likes: [],
      photo_id: "6316242e8364d16b288cf017",
    },
  ],
};

async function primaryUsers(user) {
  try {
    user = new User(user);
    user.password = generateHashPassword(user.password);
    await user.save();
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

const primaryData = () => {
  for (let i of data.users) {
    primaryUsers(i);
  }
  for (let i of data.photos) {
    primaryPhotos(i);
  }
};

module.exports = primaryData;
