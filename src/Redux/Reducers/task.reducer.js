import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    task: {},
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload) {
        state.tasks.push(action.payload);
      }
    },
    updateCompletedValue: (state, action) => {
      const { id } = action.payload;
      let updateStatus = null;
      const itemToUpdate = state.tasks.find(item => item.id === id);
      if (itemToUpdate) {
        if(itemToUpdate.completed === true){
          updateStatus = false
        }else{
          updateStatus = true
        }
        itemToUpdate.completed = updateStatus;
      }
    },
    updateFavoriteValue: (state, action) => {
      const { id } = action.payload;
      let updateStatus = null;
      const itemToUpdate = state.tasks.find(item => item.id === id);
      if (itemToUpdate) {
        if(itemToUpdate.favorite === true){
          updateStatus = false
        }else{
          updateStatus = true
        }
        itemToUpdate.favorite = updateStatus;
      }
    }
  },
});


// Action creators are generated for each case reducer function
export const { addTask, updateCompletedValue, updateFavoriteValue } = taskSlice.actions;
export default taskSlice.reducer;