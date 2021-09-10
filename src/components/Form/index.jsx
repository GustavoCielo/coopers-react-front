import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.js";

const Form = ({ saveRegister }) => {
    // TODO: saveRegister vem do useState pra salvar e renderizar, entao tem q salvar na api
  const onSubmit = (data) => {
    saveRegister(data);
    console.log(data);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").max(30),
    email: yup.string().required("E-mail obrigatório").email().matches("@"),
    telephone: yup
      .string()
      .required("telefone obrigatório")
      .matches("^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$"),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>Your name</span>
      <input
        type="text"
        placeholder="Type your name here..."
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <span>Email*</span>
      <input
        type="text"
        placeholder="example@example.com"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
      <span>Telephone*</span>
      <input type="tel" {...register("telephone")} />
      <p>{errors.telephone?.message}</p>
      <span>Message*</span>
      <input type="text" placeholder="Type what you want to say to us" />
      <button type="submit">SEND NOW</button>
    </form>
  );
};

export default Form;
