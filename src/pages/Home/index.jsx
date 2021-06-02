import Done from "../../components/Done";
import ToDoList from "../../components/ToDoList";

export default function Home() {
  return (
    <>
      <header></header>
      <div>
        <div>
          <figure>Coopers (adicionar logo)</figure>
          <h1>Organize</h1>
          <p>your daily jobs</p>
          <p>The only way to get things done</p>
          <a href="#toDoList">Go to To-do list</a>
        </div>
        <div>
          <button>Entrar</button>
          <figure>Foto do carinha</figure>
        </div>
      </div>
      <div>
        <h2>To-do List</h2>
        <span>
          Drag and drop your main priorities, check when done and create what's
          new.
        </span>
      </div>
      <div id="toDoList">
        Container das todo list
        <ToDoList />
        <Done />
      </div>
      <footer>
        <span>Need help?</span>
        <span>coopers@coopers.pro</span>
        <span>copyright 2021 Coopers. All rights reserved</span>
      </footer>
    </>
  );
}
