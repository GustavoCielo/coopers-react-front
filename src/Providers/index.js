import { LoginProvider } from "./login";
import { TasksProvider } from "./tasks";

export default function Providers({ children }) {
  return (
    <LoginProvider>
      <TasksProvider>{children}</TasksProvider>
    </LoginProvider>
  );
}
