import express from "express";
import sequelize from "./config/database";
import authRoutes from "./routes/auth";
import cors from "cors";
import reportRoutes from "../src/routes/report";
import eventRoutes from "../src/routes/event";
import impactRoutes from "../src/routes/impact";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/impact", impactRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

export default app;
