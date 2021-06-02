import { useContext, createContext, useState, useEffect } from "react";
import { useLogin } from "./login";
import api from "../services/api";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const { token } = useLogin();

  useEffect(() => {
    if (token) {
      loadTasks();
    }
  }, []);

  const loadTasks = async () => {
    const response = await api.get("/task", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("dentro do loadtasks", response.data.data);
    setTaskList(response.data.data);
  };

  const registerTask = async (description) => {
    const newTask = {
      description,
    };
    await api.post("/task", newTask, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(description);
    await loadTasks();
  };

  const removeTask = async (id) => {
    console.log("dentro do delete", id);
    console.log(token);
    await api.delete(`/task/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await loadTasks();
  };

  const changeTaskStatus = async (id, isComplete) => {
    await api.put(
      `/task/${id}`,
      {
        completed: !isComplete,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(id, isComplete);
    await loadTasks();
  };

  return (
    <TasksContext.Provider
      value={{ taskList, registerTask, removeTask, changeTaskStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
