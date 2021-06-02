import { useTasks } from "../../Providers/tasks";
import Task from "../Task";

export default function Done() {
  const { taskList } = useTasks();

  return taskList
    .filter((item) => item.completed)
    .map((item) => <Task task={item} key={item._id} />);
}
