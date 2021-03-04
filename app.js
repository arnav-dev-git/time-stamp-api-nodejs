import express from "express";
import cors from "cors";
import bodyparser from "body-parser";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  const date = new Date().toUTCString();
  const unixTimeStamp = new Date().getTime();
  res.json({ unix: unixTimeStamp, utc: date });
});

app.get("/api/timestamp/:date", (req, res) => {
  const date = new Date(req.params.date).toUTCString();
  const unixTimeStamp = new Date(req.params.date).getTime();
  if (unixTimeStamp) {
    res.json({ unix: unixTimeStamp, utc: date });
  } else {
    const dateNew = Number(req.params.date);
    if (!isNaN(dateNew)) {
      const unixChk = new Date(Number(req.params.date)).toUTCString();
      res.json({ unix: req.params.date, utc: unixChk });
    } else {
      res.json({ error: "Invalid Date" });
    }
  }
});

app.listen(PORT, (req, res) => {
  console.log(`server is running ...`);
});
