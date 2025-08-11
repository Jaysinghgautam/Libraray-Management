const express = require("express");
const morgan = require("morgan");

const app = express();
const dbConnection = require("./config/db");
const userModel = require("./models/user");
const { AsyncLocalStorage } = require("async_hooks");

app.set("view engine", "ejs");

app.use(morgan("dev"));
//middle ware for show submited data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/instruction", (req, res) => {
  res.render("instruction");
});
app.get("/E-book", (req, res) => {
  res.render("E-book");
});
app.get("/contact", (req,res) => {
  res.render("contact");
})
app.get("/seat",(req,res) => {
  res.render("seat");
})

app.get("/register", (req, res) => {
  res.render("register");
});
//function to create database user
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body; // destructuring
  const newUser = await userModel.create({
    username: username,
    email: email,
    password: password,
  });

  res.send("form submited successfully");
});

// function to show data in fronted
app.get("/get-users", (req, res) => {
  userModel
    .find({
      username: "b",
    })
    .then((users) => {
      res.send(users);
    });
});

// function to update data in database

app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate(
    {
      username: "a",
    },
    {
      email: "ab@gmail.com",
    }
  );
  res.send("user updated");
});

// delete user from database

app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({
    username: "a",
  });
  res.send("user deleted");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.listen(3001);
