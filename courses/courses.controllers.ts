import { RequestHandler } from "express";
import { Course, CourseModel } from "./courses.model";
import { StandardResponse } from "../types/response";

export const post_course: RequestHandler<unknown, StandardResponse<Course>, Course, unknown> = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const { userInfo } = req;
        console.log(userInfo);
        if (userInfo) {

            const result = await CourseModel.create({ title, description, created_by: userInfo._id });
            res.json({ success: true, data: result });
        }
    }
    catch (error) {
        next(error);
    }
};