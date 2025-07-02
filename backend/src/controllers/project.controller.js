import { Project } from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {User} from "../models/user.model.js"
// CREATE PROJECT (Admin only)
export const createProject = asyncHandler(async (req, res) => {
 

  const { title, description, status, startDate, endDate, user_id } = req.body;


  if (!title || !description || !status || !startDate || !endDate || !user_id) {
    throw new ApiError(400, "All fields including user_id (client) are required");
  }

  const existingUser = await User.findOne({user_id, role: "Client" });
  if (!existingUser) {
    throw new ApiError(404, "Client (user_id) does not exist");
  }

  // Create project
  const project = await Project.create({
    title,
    description,
    status,
    startDate,
    endDate,
    user_id:existingUser._id
  });

  res.status(201).json(new ApiResponse(201, project, "Project created successfully"));
});

// GET SINGLE PROJECT (Admin & Client)
export const viewProjectById = asyncHandler(async (req, res) => {
  const { project_id } = req.params;

  if (!project_id) throw new ApiError(400, "Project ID is required");

  const project = await Project.findOne({ project_id }).populate("userId", "fullName email");

  if (!project) throw new ApiError(404, "Project not found");

  // If client, ensure only their own project is returned
  if (req.user.role === "client" && req.user._id.toString() !== project.userId._id.toString()) {
    throw new ApiError(403, "Access denied");
  }

  res.status(200).json(new ApiResponse(200, project, "Project fetched successfully"));
});

// GET ALL PROJECTS (Admin: all, Client: own only)
export const getAllProject = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.user.role === "client") {
    filter.userId = req.user._id;
  }

  const projects = await Project.find(filter).populate("userId", "fullName email");

  if (!projects || projects.length === 0) {
    throw new ApiError(404, "No projects found");
  }

  res.status(200).json(new ApiResponse(200, projects, "Projects fetched successfully"));
});

// UPDATE PROJECT (Admin only)
export const updateProject = asyncHandler(async (req, res) => {
  const { project_id } = req.params;
  const updateData = req.body;

  if (!project_id) throw new ApiError(400, "Project ID is required");

  const updatedProject = await Project.findOneAndUpdate(
    { project_id },
    updateData,
    { new: true, runValidators: true }
  );

  if (!updatedProject) {
    throw new ApiError(404, "Project not found to update");
  }

  res.status(200).json(new ApiResponse(200, updatedProject, "Project updated successfully"));
});

// DELETE PROJECT (Admin only)
export const deleteProject = asyncHandler(async (req, res) => {
  const { project_id } = req.params;

  if (!project_id) throw new ApiError(400, "Project ID is required");

  const deletedProject = await Project.findOneAndDelete({ project_id });

  if (!deletedProject) {
    throw new ApiError(404, "No project found to delete");
  }

  res.status(200).json(new ApiResponse(200, {}, "Project deleted successfully"));
});
