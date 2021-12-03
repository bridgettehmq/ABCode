const {
    AuthenticationError,
    UserInputError,
  } = require("apollo-server-express");
  const { User } = require("../models");
  const { signToken } = require("../util/auth");
  const { dateScalar } = require("./customScalars");
  
  const resolvers = {
    Date: dateScalar,
    Query: {
      me: async (parent, args, ctx) => {
        // if ctx.user is undefined, then no token or an invalid token was
        // provided by the client.
        if (!ctx.user) {
          throw new AuthenticationError("Must be logged in.");
        }
        return User.findOne({ email: ctx.user.email });
      },
    },
  
    Mutation: {
      createUser: async (parent, args) => {
        try {
          const user = await User.create({ ...args });
          const token = await signToken(user);
          return { user, token };
        } catch (error) {
          if (error.name === "MongoError" && error.code === 11000) {
            const [[key, value]] = Object.entries(error.keyValue);
            throw new UserInputError(`${key} "${value}" already exists.`);
          }
          throw error;
        }
      },
      login: async (parent, {email, password}) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Invalid username or password");
        }
        const authentic = await user.isCorrectPassword(password);
        if (!authentic) {
          throw new AuthenticationError("Invalid username or password");
        }
        const token = await signToken(user);
        user.lastLogin = Date.now();
        await user.save();
        return { token, user };
      },
      //TODO: define typedef and resolver to remove a page from a user
      removePage: async (parent, { pageId }, context) => {
          if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              {
                $pull: {
                  savedPages: {
                    pageId
                  },
                },
              },
              { new: true }
            );
    
            return updatedUser;
          }
    
          throw new AuthenticationError("Incorrect credentials");
      },
      //TODO: define typedef and resolver to save a page for a user
      savePage: async (parent, { input }, context) => {
        console.log(input)
          if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              {
                $addToSet: {
                  pages: input}
              },
              {
                new: true,
                runValidators: true,
              }
            );
            return updatedUser;
          }
    
          throw new AuthenticationError("You need to be logged in!");
      },
    },
  };
  
  module.exports = resolvers;
