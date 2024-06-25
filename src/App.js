import React, { useEffect, useRef, useState } from 'react';
import Task from './Components/Task';

function App() {
  let taskref = useRef('');
  let [allTasks, setAllTasks] = useState([]);
  let [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  function createTask() {
    fetch('https://react-f2389-default-rtdb.firebaseio.com/tasks.json', {
      method: "POST",
      body: JSON.stringify(taskref.current.value),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        fetchAllTasks();
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('Failed to create task');
      })
  }

  function fetchAllTasks() {
    fetch('https://react-f2389-default-rtdb.firebaseio.com/tasks.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        let tasks = [];
        for (let key in data) {
          tasks.push({ id: key, value: data[key] });
        }
        setAllTasks(tasks);
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('Failed to fetch tasks');
      })
  }

  function onDelete(task){
    fetch('https://react-f2389-default-rtdb.firebaseio.com/tasks/'+task.id+'.json',{
      method:"DELETE",
    })
    .then((response)=>{
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      fetchAllTasks();
    })
    .catch((error) => {
      console.error('Error:', error);
      setErrorMessage('Failed to fetch tasks');
    })
  }

  return (
    <div className="App">
      <div className="app-container">
        <input placeholder="Enter a Task"
          ref={taskref}></input>
        <button onClick={createTask}>Create</button>
      </div>
      {!errorMessage && <Task tasks={allTasks} onDelete = {onDelete}/>}
    </div>
  );
}

export default App;
