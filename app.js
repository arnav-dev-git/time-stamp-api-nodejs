import express from "express";
import cors from "cors";
import bodyparser from "body-parser";

import timeRouter from "./routes/timeStamp.js";
import meRouter from "./routes/whoAmI.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

//middlewares
app.use("/api/timestamp", timeRouter);
app.use("/api/whoami", meRouter);

app.get("/", function (req, res) {
  res.json({ message: "Welcome to microservices api !!!" });
});

app.listen(PORT, (req, res) => {
  console.log(`server is running ...`);
});
