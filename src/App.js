import logo from "./logo.svg";
import "./App.css";

import Workspace from "./components/Workspace";

function App() {
  return (
    <div className="App">
      {/* <header className="Header">
        <h1>Matrix Sandbox</h1>
      </header> */}
      <main className="Window">
        <Workspace />
      </main>
    </div>
  );
}

export default App;
