import { MdDeleteForever } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdIconName } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  const handleDeteleNote = () => {
    handleDeleteNote(id);
    toast.error("Note deleted succesfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div>
      <div className="note" >
        <span rows='8'
				cols='10'>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <MdDeleteForever
            onClick={handleDeteleNote}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Note;
