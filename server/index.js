const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());
