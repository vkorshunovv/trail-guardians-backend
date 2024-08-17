import { Request, Response } from "express";
import Event from "../models/event";

export const getImpact = async (req: Request, res: Response) => {
  try {
    const totalEvents = await Event.count();
    const totalTrashCollected = await Event.sum("trashCollected");
    const totalHoursVolunteered = await Event.sum("hoursVolonteered");

    res.status(200).json({
      totalEvents,
      totalTrashCollected,
      totalHoursVolunteered,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error occurred during getting impact metrics: ",
        error,
      });
  }
};
