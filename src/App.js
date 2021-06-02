import Home from "./pages/Home";
import Login from "./components/Login";
import { useLogin } from "./Providers/login";

export default function App() {
  const { token } = useLogin();
  return (
    <>
      {!token && <Login />}
      <Home />
    </>
  );
}
