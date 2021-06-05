import { useState } from "react";
import { ToDoListContainer } from "./styles";
import { useTasks } from "../../Providers/tasks";
import Task from "../Task";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const { taskList, registerTask } = useTasks();

  const addTask = (evt) => {
    if (evt.key === "Enter") {
      registerTask(task);
    }
  };

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
          placeholder="Add new here..."
        />
        <ul>
          {taskList
            .filter((item) => !item.completed)
            .map((item) => {
              return (
                <li>
                  <Task task={item} key={item._id} />
                </li>
              );
            })}
        </ul>
        {/* <button>Erase all</button> */}
      </ToDoListContainer>
    </div>
  );
}
