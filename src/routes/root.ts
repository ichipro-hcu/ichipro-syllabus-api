import express from "express";

const router = express.Router();

const date = new Date();
const result = {
  success: true,
  DateTime: date.getTime(),
};

router.route("/").get((req, res) => {
  res.json(result);
});

module.exports = router;
