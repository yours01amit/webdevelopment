const express = require("express");
const {
  createNotesController,
  getsAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController,
  singleEntityUpdateController,
} = require("../controllers/notes.controller");
const NotesModel = require("../models/note.model");

const router = express.Router();

// create api
router.post("/create", createNotesController);

// get(read) all api
router.get("/allNotes", getsAllNotesController);

// get(read) single api
router.get("/:id", getSingleNoteController);

// update via put
router.put("/:id", updateNotesController);

// update via patch
router.patch("/:id/single",singleEntityUpdateController)
//  jaldi

// delete
router.delete("/:id", deleteNoteController);

module.exports = router;
