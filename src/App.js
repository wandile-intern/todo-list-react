import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
