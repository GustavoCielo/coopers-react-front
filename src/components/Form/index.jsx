import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.js";
import { Container, FormContainer, ImageContainer } from "./styles.js";
import { useContact } from "../../Providers/form.js";

const Form = () => {
  const { saveContact } = useContact();

  const onSubmit = (data) => {
    console.log(data);
    saveContact(data);
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

  return (
    <Container>
      <ImageContainer>
        <img src="./tatiana.png" alt="woman" />
        <div>
          <img src="./icon-mail.svg" alt="icon mail" />
          <span>
            GET IN <br />
            <strong>TOUCH</strong>
          </span>
        </div>
      </ImageContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Your name</p>
          <input
            type="text"
            placeholder="Type your name here..."
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
          <div>
            <div>
              <p>Email*</p>
              <input
                type="email"
                placeholder="example@example.com"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
            </div>
            <div>
              <p>Telephone*</p>
              <input
                type="tel"
                placeholder="( ) _____-____"
                {...register("telephone")}
              />
              <span>{errors.telephone?.message}</span>
            </div>
          </div>
          <p>Message*</p>
          <textarea
            name="message"
            id="message"
            placeholder="Type what you want to say to us"
            {...register("message")}
          ></textarea>
          <br />
          <button type="submit">SEND NOW</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Form;
