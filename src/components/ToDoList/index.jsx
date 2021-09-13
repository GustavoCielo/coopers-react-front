import { useState } from "react";
import { ToDoListContainer } from "./styles";
import { useTasks } from "../../Providers/tasks";
import Task from "../Task";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const { taskList, registerTask, eraseAll } = useTasks();


  const addTask = (evt) => {
    if (evt.key === "Enter") {
      registerTask(task);
    }
  };

  const clearInput = (evt) => {
    if (evt.key === "Enter" || evt.key === "Escape") {
      setTask("")
    }
  }

  return (
    <div>
      <ToDoListContainer>
        <div style={{ height: "20px", backgroundColor: "var(--orange)" }}></div>
        <h2>To-do</h2>
        <p>Take a breath.</p>
        <p>Start doing.</p>
        <input
          type="text"
          value={task}
          onChange={(evt) => setTask(evt.target.value)}
          onKeyPress={(evt) => addTask(evt)}
          onKeyUp={(evt) => clearInput(evt)}
          placeholder="Add new here..."
        />
        <ul>
          {taskList
            .filter((item) => !item.task_done)
            .map((item) => {
              return (
                <li key={item.id}>
                  <Task task={item} />
                </li>
              );
            })}
        </ul>
        <button onClick={() => { eraseAll("todo") }}>Erase all</button>
      </ToDoListContainer>
    </div>
  );
}
