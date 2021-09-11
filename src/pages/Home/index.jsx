import Done from "../../components/Done";
import ToDoList from "../../components/ToDoList";
import Form from "../../components/Form";
import { useLogin } from "../../Providers/login";
import {
  ArrowContainer,
  Button,
  ButtonToDo,
  Container,
  FlexContainer,
  ImageContainer,
  LogoContainer,
  MainContainer,
  TextContainer,
  ToDoTitleContainer,
  ToDoContainer,
} from "./styles";
import CarouselComp from "../../components/Caroulsel";

export default function Home() {
  const { token } = useLogin();
  return (
    <Container>
      <header></header>
      <div>
        <FlexContainer>
          <LogoContainer>
            <figure>
              <img src="/coopers-logo.svg" alt="coopers" />
              <figcaption style={{ display: "none" }}>
                Logo for coopers
              </figcaption>
            </figure>
            {!token && (
              <Button
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Entrar
              </Button>
            )}
          </LogoContainer>
          <MainContainer>
            <TextContainer>
              <h1>Organize</h1>
              <h2>your daily jobs</h2>
              <p>The only way to get things done</p>
              <ButtonToDo>
                <a href="/#ToDoTitleContainer">Go to To-do list</a>
              </ButtonToDo>
            </TextContainer>
            <ImageContainer>
              <figure>
                <img src="./02.svg" alt="guy working on his laptop" />
                <figcaption style={{ display: "none" }}>
                  Image of a guy working
                </figcaption>
              </figure>
            </ImageContainer>
          </MainContainer>
          <ArrowContainer>
            <a href="/#ToDoTitleContainer">
              <img src="/scroll.svg" alt="arrow down" />
            </a>
          </ArrowContainer>
        </FlexContainer>
      </div>
      <ToDoTitleContainer id="ToDoTitleContainer">
        <h2>To-do List</h2>
        <span>
          Drag and drop your main priorities, check when done and create what's
          new.
        </span>
      </ToDoTitleContainer>
      <ToDoContainer>
        <ToDoList />
        <Done />
      </ToDoContainer>
      {/* ADD SECTION WITH CAROUSEL HERE */}
      <CarouselComp />
      <Form />
      {/* TODO: make form work */}
      <footer>
        <p>Need help?</p>
        <p>coopers@coopers.pro</p>
        <p>© Coopers. All rights reserved</p>
        <div></div>
      </footer>
    </Container>
  );
}
