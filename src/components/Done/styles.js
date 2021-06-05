import styled from "styled-components";

export const ToDoListContainer = styled.div`
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
  margin-left: 40px;
  width: 380px;
  h2,
  p {
    text-align: center;
  }

  h2 {
    margin-top: 40px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 29.26px;
  }

  p + p {
    font-weight: 700;
    margin-bottom: 44px;
  }

  input[type="text"] {
    outline: none;
    border: none;
    margin-top: 30px;
    margin-left: 63px;
    margin-bottom: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
  }

  input[type="text"]::placeholder {
    color: var(--black);
  }

  li {
    text-align: left;
  }

  ul + button {
    margin-left: 40px;
    margin-bottom: 40px;
    width: 300px;
    height: 64px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    background-color: var(--black);
    color: var(--white);
  }
`;
