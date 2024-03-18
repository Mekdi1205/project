import express from "express";
import { post_course } from './courses.controllers';
const courseRouter = express.Router();

courseRouter.post('/', express.json(), post_course);
//userRouter.post('/:user_id/', express.json(), );
export default courseRouter;