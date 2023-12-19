import React, { useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { updateNote } from "../../Redux/Reducers/note.reducer";
import { useDispatch } from "react-redux";


const Model = ({ isOpen, handleClose, data }) => {
    const dispatch = useDispatch();

    const modelNoteField = useRef(null);
    const updateNotes = (id) => {
        if (modelNoteField.current.value !== "") {
            const updateNoteData = modelNoteField.current.value;
            console.log(id,updateNoteData);
            dispatch(updateNote({id, value:updateNoteData}));


            handleClose();
        }
    };



    return (
        <div>
            <Modal show={isOpen} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactQuill theme="snow" placeholder='Take a note...' ref={modelNoteField} value={data ? data.data : ""} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => updateNotes(data.id)}>
                        Update Note
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* Add additional buttons as needed */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Model;
