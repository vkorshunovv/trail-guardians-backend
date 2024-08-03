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

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res
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
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json(user);
    } else {
      res.status(500).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(401).json({ error: (error as Error).message });
  }
};
