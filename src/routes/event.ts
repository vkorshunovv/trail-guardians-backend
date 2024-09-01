import { Router } from "express";
import {
  createEvent,
  getEvents,
  // deleteEvent,
  joinEvent,
} from "../controllers/eventController";

const router = Router();

router.post("/", createEvent);
router.get("/", getEvents);
// router.delete("/:id", deleteEvent);
router.post("/joinEvent", joinEvent);

export default router;
