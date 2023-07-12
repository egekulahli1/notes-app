import { MdDeleteForever } from "react-icons/md";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Note = ({ id, text, date, handleDeleteNote }) => {
  const showToastMessage = () => {
    toast.error("Note deleted succesfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleDeteleNote = () => {
    console.log('toastify nerede');
    handleDeleteNote(id);
    showToastMessage();
  };
  return (
    <div> 
      <div className="note"  rows='8'
				cols='10' >
        <span>{text}</span>
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
