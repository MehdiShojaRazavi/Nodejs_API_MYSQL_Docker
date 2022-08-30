import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import config from "./../config.js";

// dotenv.config();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

console.log(process.env);
console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get("/", (req, res) => {
  res.send({ message: "UP" });
});
app.listen(config.PORT, config.HOST, () => {
  console.log(`Server Running on: ${config.HOST}:${config.PORT}`);
});
