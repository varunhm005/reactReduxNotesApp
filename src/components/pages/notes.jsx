import React, { useRef, useState }  from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNoteContext } from '../../Contexts/note.context';
import NoteDetails from './notesDetails'
export default function Notes() {

  const { addNote } = useNoteContext();
  const noteField = useRef(null);
  const [quillValue, setQuillValue] = useState('');


  const addNewNotes = () => {
    if (noteField.current.value !== "") {
      const noteData = noteField.current.value;
      console.log({ id: Date.now(), data: noteData, createdDate: Date.now() });

      addNote({ id: Date.now(), data: noteData, createdDate: Date.now() });
      setQuillValue('');
    }
  };
  


  return (
    <div className="content">
    <h3 className="welcomeHeading">Welcome John</h3>
    <div className="noteEditor">
    <h4 className="myNote-Head bold"><span className="ml-2" ><b>Add a Note</b></span></h4>
    <h5 className="myNote-Head bold"><span className="ml-2" ><b>Title</b></span></h5>
    <ReactQuill theme="snow" placeholder='Take a note...' value={quillValue}  ref={noteField} />
    <div className="w-25 pl-2 pb-2 " ><button className='btn btn-primary' onClick={addNewNotes} >Add Note</button></div>
    </div>


<NoteDetails/>



    </div>
  )
}
