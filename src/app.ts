import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import connecToDB from "./config/mongo";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

connecToDB();

app.listen(PORT, () => {
  console.log(`Server listen in port: ${PORT}`);
});
