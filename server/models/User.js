const { Schema, model, Types } = require("mongoose");
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

  pages: {
    type: [
      {
        pageId: {
          type: Types.ObjectId,
          default: Types.ObjectId,
          required: true
        },
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
          maxlength: 500,
        },
        paragraph2: {
          type: String,
          maxlength: 500,
        },
      },
    ],
    validate: [arrayLimit, '{PATH} exceeds the limit of 10']
  }
});
function arrayLimit(val){
  return val.length <=10;
}

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
