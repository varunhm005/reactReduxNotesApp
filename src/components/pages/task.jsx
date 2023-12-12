import React, { useRef } from 'react'
// import { useTaskContext } from '../../Contexts/task.context';
import TaskDetails from './taskDetails';
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Reducers/task.reducer";

export default function Task() {

  const dispatcher = useDispatch();
  const taskField = useRef(null);
  const dateField = useRef(null);

  const handleAddTask = () => {
    if (taskField.current.value !== "" && dateField.current.value !== "") {
      const givenDate = new Date(dateField.current.value);
      const currentDate = new Date();
      const timeDifference = givenDate.getTime() - currentDate.getTime();
      let daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const task = taskField.current.value;
      if(daysLeft < 0){
        daysLeft = 0
      }
      const duration = daysLeft + " days left";

      dispatcher(addTask({ id: Date.now(), tasks: task, duration: duration, completed: false, favorite: false }));

      taskField.current.value = "";
      dateField.current.value = ""

    }
  };


  return (
    <div className="content">
      <h3 className="welcomeHeading">Welcome John</h3>

      <div className="addTaskField">
        <h3>Add a Task</h3>
        <h4>Title</h4>
        <div><input type="text" className="form-control" ref={taskField} placeholder="Add a task..."></input></div>
        <div className="w-25 pt-5" ><input type="datetime-local" ref={dateField} className="form-control" name="" id=""></input></div>
        <div className="w-25 pt-5" ><button className='btn btn-primary' onClick={handleAddTask} >Add Task</button></div>
      </div>


<TaskDetails/>

    </div>
  )
}
