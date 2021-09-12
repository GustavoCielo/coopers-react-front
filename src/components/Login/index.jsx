import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useLogin } from "../../Providers/login";
import { useTasks } from "../../Providers/tasks";
import { LoginContainer, ModalContainer } from "./styles";

export default function Login() {
  const { setToken } = useLogin();
  const { loadTasks } = useTasks();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail requirido").email().matches("@"),
    password: yup.string().required("Senha obrigatória").min(7),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await api.post("/user/login", data);

    const { token, user } = response.data;
    await setToken(token);

    localStorage.setItem("@coopers:token", JSON.stringify(token));
    localStorage.setItem("@coopers:user", JSON.stringify(user));
    console.log(token)

    await loadTasks(token);
  };

  return (
    <LoginContainer>
      <ModalContainer>
        <div>
          <figure>
            <img src="/image1.jpg" alt="figure of a working guy" />
            <figcaption style={{ display: "none" }}>Working guy</figcaption>
          </figure>
        </div>
        <div>
          <h2>Sign in</h2>
          <p>to access your list</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>User:</span>
            <input type="text" {...register("email")} />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
            <span>Password:</span>
            <input type="password" {...register("password")} />
            <span style={{ color: "red" }}>{errors.password?.message}</span>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </ModalContainer>
    </LoginContainer>
  );
}
