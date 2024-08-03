import express from "express";
import sequelize from "./config/database";
import User from "./models/user";
import authRoutes from "./routes/auth";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

export default app;
