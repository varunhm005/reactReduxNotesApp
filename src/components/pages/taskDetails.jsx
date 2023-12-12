import React from 'react'
import { useTaskContext } from '../../Contexts/task.context';
import taskImage from "../../images/task_alt.png"


export default function TaskDetails() {

    const { tasks, updateCompletedContext, updateFavoriteContext } = useTaskContext();

    const updateCompletedStatus = (id, status) => {
        updateCompletedContext(id, status)
      }
    
      const updateFavoriteStatus = (id, status) => {
        updateFavoriteContext(id, status)
      }

      if(tasks.length > 0){
        return (
          <div className="tasksDetails">
          <h5 className="myNote-Head"><img src={taskImage} className="taskImage" alt=""></img>My Tasks</h5>
      
          <div className="taskField">
            {tasks.map((task) => (
      
              <div className="row taskRow">
                <div className="col-md-1 colWidthSm" ><i className={task.completed ? "fa fa-check-square-o iconClass" : "fa fa-square-o iconClass"} aria-hidden="true" onClick={() => updateCompletedStatus(task.id, task.completed)} ></i></div>
                <div className="col-md-8">
                  <div>{task.tasks}</div>
                  <div className="dayDetails">{task.duration}</div>
                </div>
                <div className="col-md-1 colWidthSm"><i className={task.favorite ? "fa fa-star iconClass" : "fa fa-star-o iconClass"} onClick={() => updateFavoriteStatus(task.id, task.favorite)} aria-hidden="true"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        )
      }else{
        return (
          <div className="tasksDetails">
          <h5 className="myNote-Head"><img src={taskImage} className="taskImage" alt =""></img>My Tasks</h5>
      
          <div className="taskField">
            No Task Found
          </div>
        </div>
        )
      }


}
