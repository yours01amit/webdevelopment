// const mongoose = require("mongoose");

// let notesSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     minlength: 10,
//   },
// });

// const NotesModel = mongoose.model("notes", notesSchema)

// module.exports = NotesModel;


const { default: mongoose } = require("mongoose")

let NotesSchema = new  mangoose.Schema({
  title: {
    type: String,
    required:true
  },
  description:{
    type:String,
    required:true,
    minlength: 10
  }
})




let NotesModel = mongoose.model("notes", NotesSchema)

module.exports = NotesModel;