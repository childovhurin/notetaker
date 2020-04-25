//variables and libraries
const http = require("http");
const express = require("express");
const path = require("path");
// const apiRoutes = require("../Develop/routes/apiRoutes");
// const htmlRoutes = require("../Develop/routes/htmlRoutes");
const fs = require("fs");
//express and port
const app = express();
const PORT = 3000;


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));  
// app.use("/apiRoutes", apiRoutes);
// app.use("/", htmlRoutes);

// listen for server
app.listen(PORT, () => console.log("Listening on PORT" + PORT));

