import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary defaultKeyword="howdy" />

      <footer>
        This is an{" "}
        <a href="https://github.com/emhend/dictionary-project">
          open source code
        </a>{" "}
        by <a href="https://lemieuxcodes.com">Emily Henderson.</a>
      </footer>
    </div>
  );
}

export default App;
