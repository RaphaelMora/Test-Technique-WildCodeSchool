const express = require("express");
const app = express();

const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
  Credential: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

require("dotenv").config({ path: "./.env" });
require("./database.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/argo"));

app.listen(process.env.Port, () => {
  console.log("Connecté au port 4000");
});
