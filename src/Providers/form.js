import api from "../services/api";
import { useContext, createContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactMessage, setContactMessage] = useState([]);

  const saveContact = (data) => {
    api
      .post("users/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error, "Usuário já existe."));
  };

  return (
    <ContactContext.Provider
      value={{ contactMessage, setContactMessage, saveContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
