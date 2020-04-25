// libraries
const router = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");

//unique user id
const uuid = require("uuid/v4");

//router
router.get("/api/notes", function (req, res) {
    res.send(db);
});
router.post("/api/notes", function (req, res) {
    // uuid called to generate random id
    const noteID = uuid();
    // object array for new note
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text,
    };

});
module.exports = router;


 