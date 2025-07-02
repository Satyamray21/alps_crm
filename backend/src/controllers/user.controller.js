import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const createUser = asyncHandler(async (req, res) => {
  const { fullName, email, contact, password, profilePhoto, role } = req.body;

  if (!fullName || !email || !contact || !password || !profilePhoto) {
    throw new ApiError(400, "All required fields must be provided");
  }

  const existingUser = await User.findOne({ $or: [{ email }, { contact }] });
  if (existingUser) {
    throw new ApiError(409, "User with given email or contact already exists");
  }

  const user = await User.create({
    fullName,
    email,
    contact,
    password,
    profilePhoto,
    role,
  });

  res
    .status(201)
    .json(new ApiResponse(201, user, "User registered successfully"));
});


export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password"); 

  res
    .status(200)
    .json(new ApiResponse(200, users, "All users fetched successfully"));
});

export const getUserById = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const user = await User.findOne({ user_id }).select("-password");
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, user, "User fetched successfully"));
});


export const updateUser = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const updateData = req.body;

  if (updateData.password) {
    throw new ApiError(400, "Password can't be updated from this route");
  }

  const updatedUser = await User.findOneAndUpdate(
    { user_id },
    updateData,
    { new: true, runValidators: true }
  ).select("-password");

  if (!updatedUser) {
    throw new ApiError(404, "User not found to update");
  }

  res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "User updated successfully"));
});


export const deleteUser = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const deleted = await User.findOneAndDelete({ user_id });
  if (!deleted) {
    throw new ApiError(404, "User not found to delete");
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "User deleted successfully"));
});
