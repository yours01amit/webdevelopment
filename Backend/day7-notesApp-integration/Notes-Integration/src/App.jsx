import React from "react";
import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const [updateNoteId, setUpdateNoteId] = useState(null)
  const [allNotes, setAllNotes] = useState([]);

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    getAllNotes();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updateNoteId) {
      // api call for update note
      let res = await axios.put(`http://localhost:3000/notes/${updateNoteId}`,formValues);
      console.log(res)
      setUpdateNoteId(null)
      
    } else {
      // api call for create note
      let res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );
    console.log(res);

    setFormValues({
      title: "",
      description: "",
    });
  };
    }
    // api call
    

  let getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      // console.log(res);
      setAllNotes(res.data.data);
      getAllNotes();
    } catch (error) {
      console.log("error in get all notes api", error);
    }
  };

  let updateNote = async (note) => {
    try {
      console.log(note);
      setUpdateNoteId(note._id)
      setFormValues({
        title: note.title,
        description: note.description,
      });
    } catch (error) {
      console.log("error while updating Note", error);
    }
  };

  let deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);
      getAllNotes();
    } catch (error) {
      console.log("error while deleting Note", error);
    }
  };
  return (
    <div className="h-screen p-5 flex flex-col gap-5 items-center">
      <h1 className="text-3xl font-semibold ">Notes App</h1>

      <div className="flex flex-col gap-5 items center">
        <form
          onSubmit={handleSubmit}
          className="w-200 max-w-md bg-blue-400 border border-gray-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm"
        >
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-white">Title</label>
            <input
              onChange={handleChange}
              name="title"
              value={formValues.title}
              className="p-3 outline-none text-base rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              type="text"
              placeholder="Enter note title..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-white">
              Description
            </label>
            <input
              onChange={handleChange}
              name="description"
              value={formValues.description}
              className="p-3 outline-none text-base rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none h-24"
              placeholder="Write your description here..."
            />
          </div>

          <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-xl transition-all shadow-md active:scale-[0.98]">
            {
              updateNoteId ? "Update Note" : "Add Note"
            }
          </button>
        </form>

        <div className="flex gap-4">
          {allNotes.map((val) => (
            <NoteCard
              key={val._id}
              note={val}
              updateNote={updateNote}
              deleteNote={deleteNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
