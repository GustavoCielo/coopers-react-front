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
      /* identical to box height, or 53px */
      margin-top: 80px;
      margin-left: 80px;

      display: flex;
      align-items: center;

      color: #ffffff;
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
    /* or 24px */

    /* Text */

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
    /* identical to box height, or 24px */

    color: #42d76b;
  }
`;
