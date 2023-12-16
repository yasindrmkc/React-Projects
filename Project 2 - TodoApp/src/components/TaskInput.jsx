import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  function handleInputValue(e) {
    setTask(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    if(task.trim() === '') return;
    addTask(task);
    setTask('');
  }

  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input type="text" placeholder="Add Item" value={task} onChange={handleInputValue} />
      <button>+</button>
    </form>
  );
};

export default TaskInput;
