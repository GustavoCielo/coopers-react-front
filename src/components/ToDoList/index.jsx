import { useState } from "react";
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
      <div></div>
      <h2></h2>
      <p></p>
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
            return <Task task={item} key={item._id} />;
          })}
      </ul>
    </div>
  );
}
