import { useState } from "react";
import Clock from "./Clock";
import './App.css'; // Add this line for external styling

function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="app-container">
      <h2 className="app-title">🕒 Digital Clock</h2>

      <div className="control-panel">
        <label htmlFor="colorSelect">Select Color Theme: </label>
        <select
          id="colorSelect"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
      </div>

      <Clock color={color} />
    </div>
  );
}

export default App;
