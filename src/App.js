import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { TwitterDetail } from "./pages/TwittererDetail";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<TwitterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
