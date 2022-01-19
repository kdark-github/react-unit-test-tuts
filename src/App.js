import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("Clicked ");
        }}
        label="Submit"
      >
        Click me!
      </Button>
    </div>
  );
}

export default App;
