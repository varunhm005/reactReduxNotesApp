import React, { useState } from 'react'
import { useNoteContext } from '../../Contexts/note.context';
import Model from './model'
export default function NoteDetails() {

    const { notes, deleteNoteContext } = useNoteContext();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);


    const handleButtonClick = (data) => {
        setModalData(data);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const deleteNote = (id) => {
        console.log("id",id)
        deleteNoteContext(id)
    };

    function getTimeAgo(timestamp) {
        const currentTimestamp = Date.now();
        const differenceInMilliseconds = currentTimestamp - timestamp;
        const millisecondsInADay = 24 * 60 * 60 * 1000;
      
        const daysAgo = Math.floor(differenceInMilliseconds / millisecondsInADay);
      
        if (daysAgo === 0) {
          // Less than a day ago
          const hoursAgo = Math.floor(differenceInMilliseconds / (60 * 60 * 1000));
          return hoursAgo === 1 ? `${hoursAgo} hour ago` : `${hoursAgo} hours ago`;
        } else {
          return daysAgo === 1 ? `${daysAgo} day ago` : `${daysAgo} days ago`;
        }
      }

      if(notes.length > 0){
        return (
            <div className="notesDetails">
        
              <Model isOpen={isModalOpen} handleClose={handleCloseModal} data={modalData}  />
        
            <h5 className="myNote-Head"><i className="fa fa-file-text" aria-hidden="true"></i>  <span className="ml-2" >My Notes</span></h5>
            <p className="text-muted smallFont">Recently viewed</p>
            <div className="row row-cols-1 row-cols-md-4">
            {notes.map((note) => (
              <div className="col mb-4">
                <div className="card h-100 cardBorder">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">Feedbacks </h5>
                      </div>
                      <div className="col-md-4"><i className="fa fa-pencil iconClass" aria-hidden="true" onClick={() => handleButtonClick({ id:note.id,data:note.data})} ></i> <i className="fa fa-trash ml-2 iconClass"
                          aria-hidden="true" onClick={() => deleteNote(note.id)} ></i></div>
                    </div>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: note.data }} />
                    <p className="text-muted smallFont">{getTimeAgo(note.createdDate)}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
          )
      }else{
        return (
            <div className="notesDetails">        
            <h5 className="myNote-Head"><i className="fa fa-file-text" aria-hidden="true"></i>  <span className="ml-2" >My Notes</span></h5>
            <p className="text-muted smallFont">Recently viewed</p>
            <div className="row row-cols-1 row-cols-md-4">
              <div className="col mb-4 cardWidth">
                <div className="card h-100 cardBorder">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">Note is empty!</h5>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                    <p className="text-muted smallFont"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
      }


}
