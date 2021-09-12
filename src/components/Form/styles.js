import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  margin-top: 80px;
  img {
    border-radius: 50%;
    position: relative;
    z-index: 2;
    width: 191px;
    height: 191px;
  }
  div {
    display: flex;
    width: 100%;
  }
  div > img {
    width: 60px;
    height: 60px;
    border-radius: 0;
    margin-left: 60px;
  }
  span {
    align-self: flex-start;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.08em;
    color: #06152b;
    margin-left: 24px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 700px;
  height: 720px;
  margin-top: 200px;
  padding-top: 180px;
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
    margin-left: 25px;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  div > input {
    width: 275px;
  }

  div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

  textarea {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #06152b;
    margin-left: 25px;
    resize: none;
    width: 580px;
    height: 150px;
    background: #ffffff;
    border: 1px solid #06152b;
    box-sizing: border-box;
    padding: 16px 0 0 15px;
  }

  textarea::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #9a9a9a;
  }

  button {
    width: 586px;
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
    margin-left: 25px;
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
    margin-left: 25px;
  }
`;
