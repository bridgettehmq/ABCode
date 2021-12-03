const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  page: [
    {
      title: {
        type: String,
        required: "You need to include a title!",
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      h1: {
        type: String,
        required: "You need to include an H1",
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      paragraph1: {
        type: String,
        required: true,
        minlength: 100,
        maxlength: 500,
      },
      paragraph2: {
        type: String,
        minlength: 100,
        maxlength: 500,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
