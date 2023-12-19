import React from 'react'
import taskImage from "../../images/task_alt.png"
import { useDispatch, useSelector } from "react-redux";
import { updateCompletedValue, updateFavoriteValue } from "../../Redux/Reducers/task.reducer";




export default function TaskDetails() {
  const { tasks = [] } = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();


  const updateCompletedStatus = (id) => {
    const updatedItem = { id: id };
    dispatch(updateCompletedValue(updatedItem));

  }

  const updateFavoriteStatus = (id) => {
    const updatedItem = { id: id };
    dispatch(updateFavoriteValue(updatedItem));
  }

  if (tasks.length > 0) {
    return (
      <div className="tasksDetails">
        <h5 className="myNote-Head"><img src={taskImage} className="taskImage" alt=""></img>My Tasks</h5>

        <div className="taskField">
          {tasks.map((task) => (

            <div className="row taskRow">
              <div className="col-md-1 colWidthSm" ><i className={task.completed ? "fa fa-check-square-o iconClass" : "fa fa-square-o iconClass"} aria-hidden="true" onClick={() => updateCompletedStatus(task.id)} ></i></div>
              <div className="col-md-8">
                <div>{task.tasks}</div>
                <div className="dayDetails">{task.duration}</div>
              </div>
              <div className="col-md-1 colWidthSm"><i className={task.favorite ? "fa fa-star iconClass" : "fa fa-star-o iconClass"} onClick={() => updateFavoriteStatus(task.id)} aria-hidden="true"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="tasksDetails">
        <h5 className="myNote-Head"><img src={taskImage} className="taskImage" alt=""></img>My Tasks</h5>

        <div className="taskField">
          No Task Found
        </div>
      </div>
    )
  }


}
