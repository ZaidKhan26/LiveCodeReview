const bcrypt = require("bcryptjs");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");

const registerUser = async (name, email, password) => {
  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "Email already in use");
  }

  const hashed = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    name,
    email,
    password: hashed,
  });

  return newUser;
};

const loginUser = async (email, password) => {
  const existingUser = await User.findOne({ email }).select("+password");

  if (!existingUser) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);
  
  if (!isMatch) {
    throw new ApiError(401, "Invalid Credentials")
  }

  return existingUser

};
