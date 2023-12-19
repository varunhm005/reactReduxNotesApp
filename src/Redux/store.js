import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import taskSlice from "./Reducers/task.reducer";
import noteSlice from "./Reducers/note.reducer";

export default configureStore({
  reducer: {
    tasksReducer: taskSlice,
    notesReducer: noteSlice,
  },
});
