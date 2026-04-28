const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    code: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },

    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Room", roomSchema);
