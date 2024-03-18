import express from "express";
import { signUp, signIn } from './users.controllers';
const userRouter = express.Router();

userRouter.post('/signUp', express.json(), signUp);
userRouter.post('/:user_id/signIn', express.json(), signIn);
export default userRouter;