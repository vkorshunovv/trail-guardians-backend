import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (res: Response, req: Request) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json("User already exist");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("Missing JWT_SECRET environment variable");
    }

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      jwtSecret,
      { expiresIn: "1h" }
    );
    return res
      .status(201)
      .json({ token, user: { id: newUser.id, email: newUser.email } });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const logIn = async (res: Response, req: Request) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user!.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("Missing JWT_SECRET environment variable");
    }

    const token = jwt.sign({ id: user?.id, email: user?.email }, jwtSecret, {
      expiresIn: "1h",
    });
    return res
      .status(201)
      .json({ token, user: { id: user?.id, email: user?.email } });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
