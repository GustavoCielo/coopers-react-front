import { ContactProvider } from "./form";
import { LoginProvider } from "./login";
import { TasksProvider } from "./tasks";

export default function Providers({ children }) {
  return (
    <LoginProvider>
      <TasksProvider>
        <ContactProvider>{children}</ContactProvider>
      </TasksProvider>
    </LoginProvider>
  );
}
