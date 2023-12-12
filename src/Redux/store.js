import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import taskSlice from "./Reducers/tasks.reducer";
export default configureStore({
  reducer: {
    tasksReducer: taskSlice,
  },
});
