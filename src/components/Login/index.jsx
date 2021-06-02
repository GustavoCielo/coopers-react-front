import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useLogin } from "../../Providers/login";
import { useTasks } from "../../Providers/tasks";

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

  const onSubmit = (data) => {
    api
      .post("/user/login", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@coopers:token", JSON.stringify(token));
        localStorage.setItem("@coopers:user", JSON.stringify(user));

        setToken(token);
        loadTasks();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <figure>Imagem do carinha</figure>
      </div>
      <div>
        <h2>
          Sign in
          <p>to access your list</p>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>User:</p>
          <input type="text" {...register("email")} />
          <p>{errors.email?.message}</p>
          <p>Password:</p>
          <input type="password" {...register("password")} />
          <p>{errors.password?.message}</p>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
}
