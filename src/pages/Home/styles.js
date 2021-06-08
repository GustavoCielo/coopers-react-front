import styled from "styled-components";

export const Container = styled.div`
  header {
    background: var(--green);
    width: 100%;
    height: 24px;
    position: relative;
  }
  footer {
    height: 193px;
    background-color: var(--black);
    text-align: center;
    padding: 40px;
    p {
      margin: 14px 0;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      color: var(--white);
      font-size: 24px;
    }
    p:last-child {
      font-size: 14px;
      font-weight: 400;
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
  height: 327px;
  background: var(--black);
  color: var(--white);
  text-align: center;
  padding-top: 80px;
  h2 {
    width: 302px;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 60px;
    line-height: 60px;
    border-bottom: 2px solid var(--green);
    margin-bottom: 41px;
  }
  span {
    font-family: "Mullish", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 30.12px;
    color: var(--white);
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
