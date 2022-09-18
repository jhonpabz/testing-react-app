import "./App.css";
import Todo from "./components/Todo";

function App() {
  const todos = [
    { id: 1, title: "learn testing", completed: false },
    { id: 2, title: "learn laravel", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
