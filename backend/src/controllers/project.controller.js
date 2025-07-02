import {Project} from "../models/project.model.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

export const createProject = asyncHandler(async(res,req)=>{
    try{
        const {title,description,status,startDate,endDate} = req.body;
        const project = await Project.create(
            {
                title,
                description,
                status,
                startDate,
                endDate,
                project_id,
                userId,
            }
        )
        res.send(201)
    }
    catch(err)
    {

    }
})

