const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    lineNumber: {
      type: Number,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    resolved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Comment", commentSchema);
