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
    target: {
      B1: false,
      B2: false,
      B3: false,
      B4: false,
      M1: false,
      M2: false,
      D1: false,
      D2: false,
      D3: false,
      parseError: false,
    },
    semester: {
      前期前半: false,
      前期後半: false,
      後期前半: true,
      後期後半: false,
      特別編成: false,
      parseError: false,
    },
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
    target: {
      B1: false,
      B2: false,
      B3: false,
      B4: false,
      M1: false,
      M2: false,
      D1: false,
      D2: false,
      D3: false,
      parseError: false,
    },
    semester: {
      前期前半: false,
      前期後半: false,
      後期前半: true,
      後期後半: false,
      特別編成: false,
      parseError: false,
    },
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
