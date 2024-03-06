import express from "express";
import { Class } from "../interface/interfaces";

const router = express.Router();

const classes: Array<Class> = [
  {
    year: 2024,
    id: 28341801,
    subject: "システム工学実験Ⅰ",
    teacher: "テスト 太郎",
    role: "教授",
    unit: 2,
    require: "必修",
    target: ["B3", "B4"],
    semester: "前期",
    pw: "無",
    description: "",
  },
  {
    year: 2024,
    id: 28341802,
    subject: "システム工学実験Ⅱ",
    teacher: "テスト 太郎",
    role: "教授",
    unit: 2,
    require: "必修",
    target: ["B4"],
    semester: "後期",
    pw: "無",
    description: "",
  },
];

router.route("/").get((req, res) => {
  const result = {
    success: true,
    result: classes,
  };
  res.json(result);
});

router.route("/");

module.exports = router;
