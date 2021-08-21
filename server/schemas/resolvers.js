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
    passwords: async (parent, args, context) => {
      if (context.user) {
        return await Passwords.find();
      }
      throw new AuthenticationError("Not logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
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
        const newPassword = await Passwords.create({
          category: category,
          website: website,
          password: password,
        });
      //, get saved password object
      //, find an update.userbyId, push password_id into passwords
        await User.findOneAndUpdate(context.user._id, {
        $push: { passwords: newPassword },
      });
       //, return new password object
      return newPassword;
    }

      throw new AuthenticationError("Not logged in. Data Rejected");
},


      updatePassword: async (
      parent,
      { _id, category, website, password },
      context
    ) => {
      if (context.user) {
        return await Passwords.findOneAndUpdate(
          _id,
          {
            category: category,
            website: website,
            password: password,
          },
          { new: true }
        );
      }
      throw new AuthenticationError("Not logged in!");
    },
    deletePassword: async (
      parent,
      { _id, category, website, password },
      context
    ) => {
      if (context.user) {
        const delPassword = await Passwords.findOneAndDelete(_id, {
          category: category,
          website: website,
          password: password,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { passwords: delPassword._id } }
        );

        return delPassword;
      }
      throw new AuthenticationError("Not logged in!");
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

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

