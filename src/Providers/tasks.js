import { useContext, createContext, useState, useEffect } from "react";
import { useLogin } from "./login";
import api from "../services/api";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await api.get("/");
    setTaskList(response.data.data);
  };

  const registerTask = async (description) => {
    const newTask = {
      description,
    };
    await api.post("/", newTask);
    await loadTasks();
  };

  const removeTask = async (id) => {
    await api.delete(`/${id}`);
    await loadTasks();
  };

  const changeTaskStatus = async (id, isComplete) => {
    await api.put(
      `/${id}`,
      {
        completed: !isComplete,
      }
    );
    await loadTasks();
  };

  // isComplete: str = todo or done for boolean equivalent
  const eraseAll = async (isComplete) => {
    await api.delete(`/eraseall/${isComplete}`)
    await loadTasks()
  }

  return (
    <TasksContext.Provider
      value={{
        taskList,
        registerTask,
        removeTask,
        changeTaskStatus,
        loadTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
