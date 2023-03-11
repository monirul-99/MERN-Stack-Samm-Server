const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const resumeRoutes = require("./Routes/v1/resumeDownload");

app.use(cors());
app.use(express.json());

app.use("/api/v1/resume", resumeRoutes);

app.all("*", (req, res) => {
  res.send("Not Found Route");
});
app.listen(5000, () => {
  console.log("Running Server 5000");
});
