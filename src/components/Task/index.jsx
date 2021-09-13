import { useState } from "react";
import { useTasks } from "../../Providers/tasks";
import { Container } from "./styles";

export default function Task({ task }) {
  const { removeTask, changeTaskStatus, registerTask } = useTasks();
  const [isChecked, setIsChecked] = useState(task.task_done);
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
          name={task.id}
          id={task.id}
          onClick={() => changeTaskStatus(task.id, task.task_done)}
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          style={{ display: "none" }}
        />
        <label
          htmlFor={task.id}
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
        <span>{task.task_content}</span>
      </div>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </Container>
  );
}
