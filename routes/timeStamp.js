import express from "express";

const timeRouter = express.Router();

timeRouter.get("/", (req, res) => {
  const date = new Date().toUTCString();
  const unixTimeStamp = new Date().getTime();
  res.json({ unix: unixTimeStamp, utc: date });
});

timeRouter.get("/:date", (req, res) => {
  const date = new Date(req.params.date).toUTCString();
  const unixTimeStamp = new Date(req.params.date).getTime();
  if (unixTimeStamp) {
    res.json({ unix: unixTimeStamp, utc: date });
  } else {
    const dateNew = Number(req.params.date);
    if (!isNaN(dateNew)) {
      const unixChk = new Date(Number(req.params.date)).toUTCString();
      res.json({ unix: Number(req.params.date), utc: unixChk });
    } else {
      res.json({ error: "Invalid Date" });
    }
  }
});

timeRouter.get("/", (req, res) => {
  const date = new Date().toUTCString();
  const unixTimeStamp = new Date().getTime();
  res.json({ unix: unixTimeStamp, utc: date });
});

export default timeRouter;
