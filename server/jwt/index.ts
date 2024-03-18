/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { sign, Secret, verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserByIdSchema } from "../models/auth/userAuthentication";
import { JwtExpPayload } from "../interfaces";
dotenv.config();

const jwtSecret: Secret = process.env.JWT_SECRET || "jwtsecretplschange";

const createTokens = (id: any): string => {
  const accessToken = sign({ id: id }, jwtSecret);
  return accessToken;
};

const GenerateToken = async (payload: any) => {
  console.log(sign({ ...payload }, jwtSecret, { expiresIn: "1h" }));
  return sign({ ...payload }, jwtSecret, { expiresIn: "1h" });
};

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string = "";
  console.log(token);
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(req.headers.authorization);
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Not authorized, you have no access token",
    });
  }

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const decoded = verify(token, jwtSecret) as JwtExpPayload;
      const { id } = decoded;

      const user = await getUserByIdSchema(id);

      if (!user) {
        return res.status(401).json({ message: "Not Authorized" });
      }

      next();
    } catch (error) {
      console.error(error); // Log the error for debugging
      return res.status(401).json({ message: "You are not a valid user" });
    }
  } else {
    return res.status(401).json({ message: "Invalid authorization format" });
  }
};

export { validateToken, createTokens, GenerateToken };
