import { createSlice } from "@reduxjs/toolkit";


export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [],
        note: {},
    },
    reducers: {
        addNotes: (state, action) => {
            if (action.payload) {
                state.notes.push(action.payload);
            }
        },
        updateNote: (state, action) => {
            console.log("action.payload",action.payload)
            const { id, value } = action.payload;
            const itemToUpdate = state.notes.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.data = value;
            }
        },
        deleteNoteDetails: (state, action) => {
            const { id } = action.payload;
            const updatedData = state.notes.filter(item => item.id !== id);
            return { ...state, notes: updatedData };
        },

    },
});


// Action creators are generated for each case reducer function
export const { addNotes, updateNote, deleteNoteDetails } = noteSlice.actions;
export default noteSlice.reducer;