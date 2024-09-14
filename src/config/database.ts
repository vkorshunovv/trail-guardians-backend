import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: "postgres",
  logging: console.log,
});

console.log('Database URL: ', process.env.DATABASE_URL);


sequelize.authenticate()
  .then(() => console.log("Database connection established successfully."))
  .catch(error => console.error("Unable to connect to the database:", error));

export default sequelize;
