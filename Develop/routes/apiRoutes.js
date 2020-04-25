const router = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");
// unique user id package
const uuid = require("uuid/v4");

//get api
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

    // reads JSON file and stores data as variable
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const allNotes = JSON.parse(data);
        allNotes.push(newNote);

        // adding new data and pushing that data into new note created
        fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), (err) => {
            if (err) throw err;
            res.send(db);
            console.log("Note created!");
        });
    });
});
// delete note function
router.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    // JSON file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        const allNotes = JSON.parse(data);
        const newAllNotes = allNotes.filter(note);

        fs.writeFile(
            "./db/db.json",
            JSON.stringify(newAllNotes),
            (err) => {
                if (err) throw err;
                res.send(db);
                console.log("Note deleted!");
            }
        );
    });
});
module.exports = router;
