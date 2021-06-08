import { useTasks } from "../../Providers/tasks";
import Task from "../Task";
import { ToDoListContainer } from "./styles";

export default function Done() {
  const { taskList } = useTasks();

  return (
    <div>
      <ToDoListContainer>
        <div style={{ height: "20px", backgroundColor: "var(--green)" }}></div>
        <h2>Done</h2>
        <p>Congratulations!</p>
        <p>
          You have done{" "}
          {taskList.reduce((acc, item) => (item.completed ? acc + 1 : acc), 0)}{" "}
          tasks
        </p>
        <ul>
          {taskList
            .filter((item) => item.completed)
            .map((item) => (
              <li key={item._id}>
                <Task task={item} />
              </li>
            ))}
        </ul>
        {/* <button>Erase all</button> */}
      </ToDoListContainer>
    </div>
  );
}
