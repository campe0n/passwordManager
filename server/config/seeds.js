const db = require("./connection");
const { User, Passwords } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  const User = await User.create({
    firstName: "Stewie",
    lastName: "Griffin",
    email: "stewie@testemail.com",
    password: "password",
  });
  console.log("Users seeded");

  process.exit();
});
