import { Router } from "express";
import {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController";

const router = Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
