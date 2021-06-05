import Home from "./pages/Home";
import Login from "./components/Login";
import { useLogin } from "./Providers/login";
import GlobalStyle from "./styles/global";

export default function App() {
  const { token } = useLogin();
  return (
    <>
      <GlobalStyle />
      {!token && <Login />}
      <Home />
    </>
  );
}
