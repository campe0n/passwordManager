const { AuthenticationError } = require("apollo-server-express");
const { User, Passwords } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          "Passwords"
        );

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    passwords: async () => {
      return await Passwords.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");

    },

    addPassword: async (parent, args, context) => {
     if (context.user) {
       //, create a password object
        const password = await Passwords.create({
          category,
          website,
          password
        })

       //, get saved password object
       //, find an update.userbyId, push password_id into passwords
       //, return new password object
       return Passwords.findByIdAndUpdate(context.passwords._id), args, {
      new: true, 
    };
  }

  throw new AuthenticationError("Not logged in. Data Rejected");

},


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentails");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentails");
      }

      const token = signTOken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
