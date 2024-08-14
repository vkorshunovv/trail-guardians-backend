import { Request, Response } from "express";
import Event from "../models/event";

export const createEvent = async (req: Request, res: Response) => {
  const { title, description, date, coordinates, volunteersNeeded } = req.body;

  try {
    const newEvent = await Event.create({
      title,
      description,
      date,
      coordinates,
      volunteersNeeded,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error occurred while creating Event" });
  }
};
