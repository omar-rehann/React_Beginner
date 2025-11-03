import { useEffect, useState } from "react";
import "../styles/note.css";

function Noteapp() {
  const [notes, setnotes] = useState([]);
// get local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setnotes(savedNotes);
  }, []);
//   sava local storeage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
//   increamte structure
  const structure = () => {
    setnotes((prev) => [...prev, { text: "" }]);
  };
//   edit note app
   const handleChange = (i, value) => {
    const updated = [...notes];
    updated[i].text = value;
    setnotes(updated);
  };
//   delete item
  const handleDelete = (i) => {
    const updated = notes.filter((_, index) => index !== i);
    setnotes(updated);
  };

  return (
    <div className="parent">
      <div className="start">
        <h4>NoteApp Website</h4>
      </div>

      <div className="content">
        <button onClick={structure}>+</button>
      </div>

      <div className="structure">
        {notes.map((note, i) => (
          <div key={i} className="noteapp">
            <textarea
              cols={20}
              rows={10}
              placeholder="type..."
              value={note.text}
              onChange={(e) => handleChange(i, e.target.value)}
            />
            <button>Save</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noteapp;
