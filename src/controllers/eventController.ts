import { Request, Response } from "express";
import Event from "../models/event";
import User from "../models/user";

export const createEvent = async (req: Request, res: Response) => {
  const { title, date, location, volunteersNeeded } = req.body;

  try {
    const newEvent = await Event.create({
      title,
      date,
      location,
      volunteersNeeded,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Error occurred while creating Event" });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error occurred while getting Events" });
  }
};

// export const deleteEvent = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const event = await Event.findByPk(id);
//   if (!event) {
//     return res.status(404).json({ message: "Event not found" });
//   }
//   try {
//     await event.destroy();
//     res.status(204).end();
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: `Error occurred while deleting Event with id: ${id}` });
//   }
// };

export const joinEvent = async (req: Request, res: Response) => {
  const { userId, eventId } = req.body;

  try {
    const user = await User.findByPk(userId);
    const event = await Event.findByPk(eventId);

    if (!user || !event) {
      return res.status(404).json({ message: "User or Event were not found" });
    }

    const joinedEvents = user.joinedEvents || [];
    if (!joinedEvents.includes(eventId)) {
      joinedEvents.push(eventId);
      user.joinedEvents = joinedEvents;
      await user.save();
    }

    if (joinedEvents) {
      event.volunteersSignedUp = (event.volunteersSignedUp || 0) + 1;
      await event.save();
    }

    return res.status(200).json({
      message: "Successfully joined event",
      joinedEvents: user.joinedEvents,
      updatedEvent: event,
    });
  } catch (error) {
    console.error("Error joining event:", error);
    res.status(500).json({ error: (error as Error).message });
  }
};
