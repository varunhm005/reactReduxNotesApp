import React, { createContext, useState, useContext } from "react";


const TaskContext = createContext();

export const useTaskContext = () => {
    return useContext(TaskContext);
  };
  
  export const TaskProvider = ({ children }) => {
    const [tasks, setTask] = useState([]);
  
    const addTask = (newTask) => {
      setTask([...tasks, newTask]);
    };

    

    const updateCompletedContext = (itemId, status) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === itemId) {
          if(status === true){
            status = false
          }else{
            status = true
          }
          return { ...task, completed: status };
        }
        return task;
      });
    
      setTask(updatedTasks);
    };

    const updateFavoriteContext = (itemId, status) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === itemId) {
          if(status === true){
            status = false
          }else{
            status = true
          }
          return { ...task, favorite: status };
        }
        return task;
      });
    
      setTask(updatedTasks);
    };
  
    return (
      <TaskContext.Provider value={{ tasks, addTask, updateCompletedContext, updateFavoriteContext}}>
        {children}
      </TaskContext.Provider>
    );
  };
