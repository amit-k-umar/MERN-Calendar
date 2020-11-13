const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth } = require("./middleware/authMiddleware");
const User = require("./models/userModel");
const GroupModel = require("./models/groupUser");
require("dotenv").config();
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

//database conection
//const dbURI = 'mongodb+srv://wom:amit@123@merncalender.tpijb.mongodb.net/calender?retryWrites=true&w=majority';
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(5000);
  })

  .catch((err) => console.log(err));

console.log("kjkkk");

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send("ho gaya conect");
});
app.get("/login", (req, res) => {
  res.send("you are redirected as you are not authenticated");
});
app.get("/user", requireAuth, (req, res) => {
  res.send("you are acessing this becaluse you are authorised");
});

// GET ALL USERS FROM OUT DATABASE

app.get("/userList", function (req, res) {
  var users = {};

  User.find({}, function (err, user) {
    users[user._id] = user;
  });

  res.send(users);
});

app.post("/search-users", (req, res) => {
  let userPattern = new RegExp("^" + req.body.query);
  User.find({ email: { $regex: userPattern } })
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      console.log(err);
    });
});

//SEND EVENTS TO FRIENDS

app.use(authRoutes);
