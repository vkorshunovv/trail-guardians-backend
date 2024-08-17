import { Router } from "express";
import { getImpact } from "../controllers/impactController.ts";

const router = Router();

router.get("/", getImpact);

export default router;
