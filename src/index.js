import express from "express";
import cors from "cors";
import config from "./config/config.js";
import logger from "./util/loggerr.js";
import HttpStatus from "./controller/patient.controller.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// console.log(process.env);
// console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get("/", (req, res) => {
  res.send(new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      '',
      ''
    ));
});
app.listen(config.PORT, config.HOST, () => {
  logger.info(`Server Running on: ${config.HOST}:${config.PORT}`);
});
