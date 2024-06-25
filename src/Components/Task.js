import React from 'react';

function Task(props) {
    function onDeleteClick(task){
        props.onDelete(task)
    }
  return (
    <div>
      {props.tasks.map(task => (
        <div key={task.id}>{task.value}
         <button onClick={()=>onDeleteClick(task)}>Delete</button></div>
      ))}
     
    </div>
  );
}

export default Task;
