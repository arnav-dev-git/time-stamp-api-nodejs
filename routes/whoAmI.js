import express from "express";

const meRouter = express.Router();

meRouter.get("/", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.header("Accept-Language"),
    software: req.header("User-Agent"),
  });
});

export default meRouter;
