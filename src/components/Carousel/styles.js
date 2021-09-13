import styled from "styled-components";

export const SectionCarousel = styled.section`
  .goodThingsContainer {
    display: flex;
    background: #4ac959;
    border-radius: 10px;
    width: 1080px;
    height: 520px;
    margin-left: 140px;
    position: absolute;
    h2 {
      width: 305px;
      height: 53px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 110%;
      margin-top: 80px;
      margin-left: 80px;

      display: flex;
      align-items: center;

      color: #ffffff;
    }

    @media (max-width: 700px) {
      margin: 0;
    }
  }
  
  div {
    display: flex;
  }

  .keyContainer {
    height: 700px;
  }

  button.rec-dot {
    background-color: #c4c4c4;
    box-shadow: 0 0 1px 3px #c4c4c4;
    width: 29px;
    height: 29px;
    margin-top: 33px;
  }

  button.rec-dot_active {
    box-shadow: 0 0 1px 3px #4ac959;
    background-color: #4ac959;
  }

  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px #4ac959;
    background-color: #4ac959;
  }
`;

export const CarContainer = styled.div`
  position: relative;
  top: 250px;
  left: 60px;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 430px;
  border-radius: 16px;
  margin: 0 10px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 1px 3px #9499b3;

  h3 {
    margin-top: 30px;
    margin-bottom: 22px;
    border: 1px solid #9499b3;
    border-radius: 20px;
    max-width: 80px;
    font-family: Soleil, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 120%;
    color: #9499b3;
    padding-left: 8px;
    margin-left: 20px;
  }

  span {
    font-family: Soleil;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    min-height: 72px;
    line-height: 120%;
    margin-left: 20px;
    color: #312f4f;
  }

  a {
    position: relative;
    font-family: Soleil;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    top: 50px;
    left: 20px;
    color: #42d76b;
  }

  @media (max-width: 1300px) {
    width: 260px;
    height: 330px;

    img {
      width: 260px;
    }

    h3 {
      font-size: 10px;
    }

    span {
      font-size: 14px;
    }

    a {
      font-size: 10px;
      top: 20px;
    }
  }

  @media (max-width: 968px) {
    width: 200px;
    height: 250px;
    img {
      width: 200px;
    }

    h3 {
      font-size: 10px;
    }

    span {
      font-size: 14px;
    }

    a {
      font-size: 10px;
      top: 20px;
    }
  }

  @media (max-width: 800px) {
    width: 160px;
    height: 280px;
    img {
      width: 160px;
    }

    h3 {
      font-size: 10px;
    }

    span {
      font-size: 14px;
    }

    a {
      font-size: 10px;
      top: 20px;
    }
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;
