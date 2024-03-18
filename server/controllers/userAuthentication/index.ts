import {
  getUserByEmailSchema,
  getAllUserSchema,
  getUserByIdSchema,
  updateUserByIdSchema,
  registerUserSchema,
} from "../../models/auth/userAuthentication";
import { authentication, random } from "../../helper";
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { RegisterUserInterface } from "../../interfaces";
import { GenerateToken, createTokens } from "../../jwt";
//This controller is to get all users
const getAllUsersModel = async (req: Request, res: Response) => {
  try {
    const users = await getAllUserSchema();
    return res.status(200).json(users);
    console.log("");
  } catch (error: unknown) {
    // Handle the error
    const errorMessage = (error as { message?: string })?.message;
    console.error("An error occurred:", errorMessage);
  }
};

//This controller is to get user by email
const getUserByEmailModel = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const userExist = await getUserByEmailSchema(email);

    if (userExist) {
      return res.status(200).json(userExist);
    } else {
      return res.status(400).json({ message: "User not  found." });
    }
  } catch (error: unknown) {
    // Handle the error
    const errorMessage = (error as { message?: string })?.message;
    console.error("An error occurred:", errorMessage);
  }
};

const registerUserModel = async (req: Request, res: Response) => {
  try {
    const { email, phoneNo, userName, password } = req.body;
    if (!email || !phoneNo || !userName || !password) {
      return res.status(400).json({ message: "Pass in neceessary parameters" });
    }

    const existingUser = await getUserByEmailSchema(email);

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Account with email already exist" });
    }

    const salt = random();

    const user = (await registerUserSchema({
      email,
      userName,
      phoneNo,
      firstName: null,
      lastName: null,
      country: null,
      state: null,
      city: null,
      address: null,
      recoveryOption: {
        question: null,
        answer: null,
      },
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    })) as RegisterUserInterface;

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginUserModel = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userExists = await getUserByEmailSchema(email).select(
      "+authentication.salt +authentication.password"
    );

    if (!userExists) {
      return res.status(500).json({ message: "User doesn't exist" });
    }

    const expectedHash = authentication(
      userExists?.authentication?.salt || "",
      password
    );
    if (userExists?.authentication?.password != expectedHash) {
      return res
        .status(403)
        .json({ message: "Incorrect password! Please try again" });
    }
    const output = createTokens(userExists._id);
    console.log(output, userExists);
    res.status(200).json({
      token: output,
      user: userExists,
    });
    return;
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getAllUsersModel,
  getUserByEmailModel,
  registerUserModel,
  loginUserModel,
};
