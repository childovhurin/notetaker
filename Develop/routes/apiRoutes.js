// libraries
const router = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");

//unique user id
const uuid = require("uuid/v4");