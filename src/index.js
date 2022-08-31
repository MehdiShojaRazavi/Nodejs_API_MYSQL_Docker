import express from "express";
import cors from "cors";
import config from "./config/config.js";
import Response from "./domain/responce.js";
import logger from "./util/loggerr.js";
import HttpStatus from "./controller/patient.controller.js";
import patientRoutes from "./route/patient.route.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// console.log(process.env);
// console.log(`NODE_ENV=${config.NODE_ENV}`);

app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "Patient API, v1.0.0 - all System Go"
    )
  );
});

app.all("*", (req, res) => {
  res
    .status(HttpStatus.NOT_FOUND.code)
    .send(
      new Response(
        HttpStatus.NOT_FOUND.code,
        HttpStatus.NOT_FOUND.status,
        "Route does not exist on the server"
      )
    );
});
app.listen(config.PORT, config.HOST, () => {
  logger.info(`Server Running on: ${config.HOST}:${config.PORT}`);
});
