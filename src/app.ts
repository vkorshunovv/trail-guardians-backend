import express from "express";
import sequelize from "./config/database";
import authRoutes from "./routes/auth";
import cors from "cors";
import reportRoutes from "../src/routes/report";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", reportRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

export default app;
