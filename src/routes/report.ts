// import { Router } from "express";
// import { authMiddleware } from "../middleware/authMiddleware";
// import { createReport, getReports } from "../controllers/reportController";
// import multer from "multer";

// const router = Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// ``;
// const upload = multer({ storage });

// router.post("/report", authMiddleware, upload.single("image"), createReport);
// router.get("/report", getReports);

// export default router;

import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createReport, getReports } from "../controllers/reportController";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/report", upload.single("image"), createReport);
router.get("/report", getReports);

export default router;