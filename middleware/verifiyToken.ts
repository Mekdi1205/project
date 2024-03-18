import { RequestHandler } from "express";
import { verify } from 'jsonwebtoken';
import { JWTContent } from "../jwtTypes";

export const checkAndVerifyToken: RequestHandler<unknown, unknown, unknown, unknown> = async (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        const secret = process.env.mySecret;
        const results = verify(token, "secret") as JWTContent;
        if (results) {
            req.userInfo = results;
            next();
        } else {
            res.json({ message: "you are not authorized" });
        }
    }


};