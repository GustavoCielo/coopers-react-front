import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    margin-left: 23px;
  }
  span {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    margin-left: 24px;
    font-size: 16px;
    line-height: 24px;
    max-width: 220px;
    display: inline-block;
    margin-bottom: 24px;
  }

  button {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    height: 24px;
    width: 40px;
    font-size: 12px;
    line-height: 24px;
    color: #999999;
    background: none;
    margin-right: 38px;
  }

  div {
    display: flex;
    justify-content: flex-start;
  }

  label {
    width: 24px;
    height: 24px;
    margin-left: 23px;
  }
`;
