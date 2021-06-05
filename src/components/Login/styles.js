import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 80px;
    line-height: 64px;
    margin-top: 40px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 60px;
    line-height: 64px;
    color: var(--green);
    margin-bottom: 84px;
  }

  span {
    display: block;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 24px;
  }

  input {
    width: 342px;
    height: 54px;
    border: 1px solid #959595;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  button {
    background-color: var(--green);
    color: var(--white);
    width: 300px;
    height: 64px;
    margin-bottom: 53px;
    margin-top: 26px;
    margin-left: 21px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  width: 40%;
  min-width: 800px;
  margin-top: 0;
`;
