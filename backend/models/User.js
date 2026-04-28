const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 3 && v.length < 50;
        },
        message: "Name must be between 4 and 49 characters",
      },
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: ["employer", "admin"],
      default: "employer",
      required: true,
    },
  },

  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);