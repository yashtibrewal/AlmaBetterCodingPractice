

import { useRef, useState } from 'react';

export default function Todo() {

  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  function addTask() {
    if (inputRef && inputRef.current.value) {

      const new_tasks = [...tasks, inputRef.current.value];
      inputRef.current.value = ''
      setTasks(new_tasks);
    }
  }
  return (
    <>
      <h1>To-DO List</h1>
      <input ref={inputRef} placeholder='Enter task'></input>
      <button onClick={addTask}>Add</button>
      {tasks.map((task, idx) => {
        return <li key={idx}>
          {task}
        </li>
      })}
      <div>
      </div>
    </>
  )

}