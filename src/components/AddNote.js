import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNote = ({ handleAddNote }) => {
  const showToastMessage = () => {
    toast.success("Note added succesfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const characterLimit = 200;

  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      showToastMessage();
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
