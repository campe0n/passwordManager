const db = require("./connection");
const { User, Passwords } = require("../models");

db.once("open", async () => {
  await Passwords.deleteMany();

  const passwords = await Passwords.insertMany([
    {
      category: "Social Media",
      website: "Instagram",
      password: "Instapassword",
    },
    {
      category: "Social Media",
      website: "Facebook",
      password: "facebookpassword",
    },
    {
      category: "Entertainment",
      website: "Netflix",
      password: "netflixpassword",
    },
    {
      category: "Entertainment",
      website: "Hulu",
      password: "hulupasswordl",
    },
    {
      category: "Finance",
      website: "Chase Bank",
      password: "chasepassword",
    },
  ]);

  console.log("Passwords seeded");

  await User.deleteMany();

  await User.create({
    firtName: "Stewie",
    lastName: "Griffin",
    email: "stewie@testmail.com",
    passsword: "password",
    passwords: [
      {
        passwords: passwords,
      },
    ],
  });

  console.log("User seeded");

  process.exit();
});
