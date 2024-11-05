const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
  {
    name: "namu",
    id: 1,
  },
  {
    name: "telmuun",
    id: 2,
  },
  {
    name: "agii",
    id: 3,
  },
];

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "hii", (err) => {
    if (err) {
      res.send("invalid token");
    }
  });
  if (token) {
    res.send(users);
  } else {
    res.send("!");
  }
});

app.post("/login", (req, res) => {
  const body = req.body;
  const token = jwt.sign(body, "hii");

  res.send(token);
});

app.listen(3000);
