import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
