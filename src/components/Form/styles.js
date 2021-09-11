import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 700px;
  height: 720px;
  margin-top: 60px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(6, 21, 43, 0.08);
  border-radius: 4px;

  input {
    width: 580px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #06152b;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 16px;

    margin-bottom: 24px;
  }

  input::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #9a9a9a;
  }

  button {
    width: 580px;
    height: 52px;
    background: #46bd62;
    border-radius: 4px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #06152b;
    margin-bottom: 8px;
  }
`;
