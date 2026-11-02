const { default: mongoose } = require("mongoose");

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "minimum 20 characters are required"],
  },
});

const NotesModel = mongoose.model("notes", NotesSchema);

module.exports = NotesModel;
