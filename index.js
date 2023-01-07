const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Sazzad", email: "sazzad@gmail.com", phone: "01711123123" },
  { id: 2, name: "Shatu", email: "shatu@gmail.com", phone: "01711145123" },
  { id: 3, name: "Tareq", email: "tareq@gmail.com", phone: "01531123893" },
  { id: 4, name: "Jebi", email: "jebi@gmail.com", phone: "01719023123" },
  { id: 5, name: "Samrat", email: "samrat@gmail.com", phone: "01831123123" },
  { id: 6, name: "Sajib", email: "sajib@gmail.com", phone: "01691123123" },
];

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my Node app");
});

app.get("/users", (req, res) => {
  res.send(users);
});
//getiing dynamic url id and find user based on that id.
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const urlId = parseInt(req.params.id);
  const matchedUser = users.find((user) => user.id === urlId);
  console.log("client will receieve", matchedUser);
  res.send(matchedUser);
});

//getting data via POST method  from clientside
app.post("/user", (req, res) => {
  console.log("request", req.body);
  res.send("POST data success");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
