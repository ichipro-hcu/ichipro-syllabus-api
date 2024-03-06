import express, { urlencoded } from "express";

const app: express.Application = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", require("./routes/root"));
app.use("/api/v1/syllabus", require("./routes/syllabus"));

app.listen(3000);
