import React, { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";




const App = () => {
  const [toDoList, setTodoList] = useState([]);
  const [task, setTasks] = useState();

  

  const addTask = (taskName) => {
    const newTask = {
      taskName,
      checked: false,
    };
    setTodoList([...toDoList, newTask]);

  };

  function deleteTask(deleteTaskName){
    setTodoList(toDoList.filter(task => task.taskName !== deleteTaskName ))
  }

  function toggleCheck(taskName) {
    setTodoList((prevToDoList) => prevToDoList.map((task) => task.taskName === taskName ? {...task,checked: !task.checked} : task))
  }

  
  return (
    <>
      <div className="container">
        <h1>Task Master</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem task={task} key={key} deleteTask = {deleteTask} toggleCheck={toggleCheck} />
            ))}
          </ul>

          {toDoList.length ===0? <p className="notify">You are done!</p> : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
};

export default App;
