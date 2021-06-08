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
          name={task._id}
          id={task._id}
          onClick={() => changeTaskStatus(task._id, task.completed)}
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          style={{ display: "none" }}
        />
        <label
          htmlFor={task._id}
          style={
            isChecked
              ? { backgroundImage: "url('/isNotCompleted.svg')" }
              : { backgroundImage: "url('/isCompleted.svg')" }
          }
        ></label>
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
