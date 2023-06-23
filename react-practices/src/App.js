import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text="Learn React JS" />
      <br />
      <Todo text="Learn Next JS" />
      <br />
      <Todo text="Learn TypeScript JS" />
    </div>
  );
}

export default App;
