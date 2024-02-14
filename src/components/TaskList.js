import React from "react";
import { TASKS } from '../data';
function TaskList({tasks}) {
  return (
    <div className="tasks">
      <ul>
        <TaskList key={tasks.id} tasks={ TASKS }/>
      </ul>
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
