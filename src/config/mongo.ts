import "dotenv/config";
import { connect } from "mongoose";

const DB_URI = <string>process.env.DB_URI;

const connecToDB = async () => {
  try {
    await connect(DB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

export default connecToDB;
