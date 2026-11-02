import React from "react";

const NoteCard = ({ note,updateNote, deleteNote }) => {
  return (
    <div className="w-[30%] border border-black p-3 flex flex-col gap-4 rounded-xl">
      <h1>{note.title}</h1>
      <p clsssName="text-xs">
        {note.description.length > 20
          ? note.description.substring(0, 20)
          : note.description}
      </p>
      <div className="flex justify-between gap-2 ">
        <button onClick={() => updateNote(note)} className="p-3 font-semibold bg-yellow-600 text-white rounded-xl">Update</button>
        <button onClick={() => deleteNote(note._id)} className="p-3 font-semibold bg-red-600 text-white rounded-xl">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
