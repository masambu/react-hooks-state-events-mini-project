import React from "react";
import App from '../components/App';
import Task from '..components/Task';

function Task() {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
