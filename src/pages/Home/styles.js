import styled from "styled-components";

export const Container = styled.div`
  header {
    background: #ffffff;
    width: 100%;
    height: 24px;
    position: relative;
  }
  footer {
    height: 300px;
    padding-top: 91px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      178deg,
      rgba(255, 255, 255, 1) 26%,
      rgba(0, 0, 0, 1) 27%,
      rgba(0, 0, 0, 1) 100%,
      rgba(255, 255, 255, 1) 100%
    );
    text-align: center;
    p {
      margin: 14px 0;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      color: var(--white);
      font-size: 24px;
    }
    p:nth-last-child(2) {
      margin: 0 0 28px 0;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #ffffff;
    }
    div {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        179deg,
        rgba(0, 0, 0, 1) 10%,
        rgba(74, 201, 89, 1) 11%
      );
      height: 48px;
      width: 511px;
      margin: 0 auto;
    }
  }
`;

export const LogoContainer = styled.div`
  margin-top: 30px;
  margin-left: 80px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin-right: 86px;
  background: var(--black);
  color: var(--white);
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  margin-top: 104px;
  margin-left: 80px;
  max-width: 621px;
  text-align: left;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 80px;
    color: var(--black);
    line-height: 64px;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 60px;
    color: var(--green);
    line-height: 64px;
  }

  p {
    margin-top: 56px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
  }
  @media (max-width: 1200px) {
    margin: 104px auto 16px auto;
    text-align: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/Group6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1200px) {
    background-image: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  img {
    width: 443px;
    height: 481.52px;
    margin-top: 62px;
    margin-right: 86px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonToDo = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  background: var(--green);
  color: var(--white);
  width: 300px;
  height: 64px;
  font-size: 24px;
  line-height: 29.26px;
  margin-top: 44px;
  border-radius: 10px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const ToDoTitleContainer = styled.div`
  width: 100%;
  height: 420px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    176deg,
    rgba(255, 255, 255, 1) 18%,
    rgba(0, 0, 0, 1) 19%,
    rgba(0, 0, 0, 1) 77%,
    rgba(255, 255, 255, 1) 78%
  );
  color: var(--white);
  text-align: center;
  padding-top: 80px;
  h2 {
    width: 302px;
    margin: 40px auto;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 60px;
    line-height: 60px;
    border-bottom: 2px solid var(--green);
    margin-bottom: 41px;
  }
  span {
    display: inline-block;
    font-family: "Mullish", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 30.12px;
    color: var(--white);
    max-width: 600px;
  }
  @media (max-width: 850px) {
    text-align: center;
    span {
      margin: 0 24px;
    }
  }
`;

export const ToDoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 92px;
  padding-bottom: 200px;
  background-image: url("grafismos-lateral-esquerda.png");
  background-repeat: no-repeat;
  background-position: left;
  margin-bottom: 80px;
  @media (max-width: 850px) {
    flex-direction: column;
    padding: 0;
    margin: 50px 0;
    align-items: center;
    div > div {
      margin: 20px 0;
    }
  }
`;
