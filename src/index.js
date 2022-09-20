const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const { port } = require("./config");

const users = require("./routes/users");

app.use("/users/", users);

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
