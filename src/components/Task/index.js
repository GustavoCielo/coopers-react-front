import { useState } from "react";
import { useTasks } from "../../Providers/tasks";

export default function Task({ task }) {
  const { removeTask, changeTaskStatus } = useTasks();
  const [isChecked, setIsChecked] = useState(task.completed);

  return (
    <>
      <input
        type="checkbox"
        onClick={() => changeTaskStatus(task._id, task.completed)}
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      ></input>
      <span>{task.description}</span>
      <button onClick={() => removeTask(task._id)}>Delete</button>
    </>
  );
}
