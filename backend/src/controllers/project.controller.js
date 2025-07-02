import { Project } from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// CREATE
export const createProject = asyncHandler(async (req, res) => {
  const { title, description, status, startDate, endDate, userId } = req.body;

  if (!title || !description || !status || !startDate || !endDate || !userId) {
    throw new ApiError(400, "All fields are required");
  }

  const project = await Project.create({
    title,
    description,
    status,
    startDate,
    endDate,
    userId,
    project_id
  });

  res
    .status(201)
    .json(new ApiResponse(201, project, "Project created successfully"));
});

// VIEW
export const viewProject = asyncHandler(async (req, res) => {
  const { project_id } = req.params;

  if (!project_id) {
    throw new ApiError(400, "Project ID is required");
  }

  const project = await Project.findOne({ _id: project_id });

  if (!project) {
    throw new ApiError(404, "Project not found with this ID");
  }

  res
    .status(200)
    .json(new ApiResponse(200, project, "Project fetched successfully"));
});

// DELETE
export const deleteProject = asyncHandler(async (req, res) => {
  const { project_id } = req.params;

  if (!project_id) {
    throw new ApiError(400, "Project ID is required");
  }

  const deleted = await Project.findByIdAndDelete(project_id);

  if (!deleted) {
    throw new ApiError(404, "No project found to delete");
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Project deleted successfully"));
});

// UPDATE
export const updateProject = asyncHandler(async (req, res) => {
  const { project_id } = req.params;
  const updateData = req.body;

  if (!project_id) {
    throw new ApiError(400, "Project ID is required");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    project_id,
    updateData,
    { new: true, runValidators: true }
  );

  if (!updatedProject) {
    throw new ApiError(404, "Project not found to update");
  }

  res
    .status(200)
    .json(new ApiResponse(200, updatedProject, "Project updated successfully"));
});
