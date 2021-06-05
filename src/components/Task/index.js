import { useState } from "react";
import { useTasks } from "../../Providers/tasks";
import { Container } from "./styles";

export default function Task({ task }) {
  const { removeTask, changeTaskStatus, registerTask } = useTasks();
  const [isChecked, setIsChecked] = useState(task.completed);
  const [editTask, setEditTask] = useState("");

  const addTask = (evt) => {
    if (evt.key === "Enter") {
      registerTask(editTask);
    }
  };

  return (
    <Container>
      <div>
        <input
          type="checkbox"
          onClick={() => changeTaskStatus(task._id, task.completed)}
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
        ></input>
        {/* <input
          type="text"
          value={task.description}
          onChange={(evt) => setEditTask(evt.target.value)}
          onKeyPress={(evt) => addTask(evt)}
        /> */}
        <span>{task.description}</span>
      </div>
      <button onClick={() => removeTask(task._id)}>Delete</button>
    </Container>
  );
}
