import api from "../services/api";
import { useContext, createContext } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {

  const saveContact = (data) => {
    api
      .post("/form", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error, "Mensagem já existe."));
  };

  return (
    <ContactContext.Provider value={{ saveContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
