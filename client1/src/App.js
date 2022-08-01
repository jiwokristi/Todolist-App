import { Routes, Route } from "react-router-dom";

import "./App.css";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingScreen />} />
      </Routes>
    </div>
  );
}

export default App;
