import { Router, Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";

const router = Router();

router.post("/signup", async (res: Response, req: Request) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.post("/login", async (res: Response, req: Request) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (user && user.password === password) {
      res.status(201).json(user);
    } else {
      res.status(500).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(401).json({ error: (error as Error).message });
  }
});

export default router;
