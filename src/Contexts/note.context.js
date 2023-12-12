import React, { createContext, useState, useContext } from "react";


const NoteContext = createContext();

export const useNoteContext = () => {
    return useContext(NoteContext);
};

export const NoteProvider = ({ children }) => {
    const [notes, setNote] = useState([]);

    const addNote = (newNote) => {
        setNote([...notes, newNote]);
    };



    const updateNoteContext = (id, data) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, data: data };
            }
            return note;
        });

        setNote(updatedNotes);
    };

    const deleteNoteContext = (id) => {

        setNote((prev) => prev.filter((item) => item.id !== id));


    }

    // const updateFavoriteContext = (itemId, status) => {
    //   const updatedTasks = tasks.map((task) => {
    //     if (task.id === itemId) {
    //       if(status === true){
    //         status = false
    //       }else{
    //         status = true
    //       }
    //       return { ...task, favorite: status };
    //     }
    //     return task;
    //   });

    //   setTask(updatedTasks);
    // };

    return (
        <NoteContext.Provider value={{ notes, addNote, updateNoteContext, deleteNoteContext }}>
            {children}
        </NoteContext.Provider>
    );
};
