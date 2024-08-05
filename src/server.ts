import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  console.log('Database env: ', process.env.DATABASE_URL);
  console.log('JSON Web Token env: ', process.env.JWT_SECRET);
});
