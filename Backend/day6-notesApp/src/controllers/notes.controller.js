const NotesModel = require("../models/note.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getsAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    res.status(200).json({
      message: "All notes fetched",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    let note = await NotesModel.findById(noteId);

    res.status(200).json({
      message: "note fetch successfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;
    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
        new: true
    });
    return res.status(200).json({
        message: "note update successfully",
        data: updatedNote
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteNoteController = async (req, res) => {
    try {

        let noteId = req.params.id

        await NotesModel.findByIdAndDelete(noteId)

        return res.status(200).json({
            message: "note deleted successfully"
        })
        
    } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createNotesController,
  getsAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController
};
