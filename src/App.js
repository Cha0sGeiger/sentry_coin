import React from "react";
import "./App.css";
import { Header } from "./components/UI/Menu";
import { Dashboard } from "../src/components/routes/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
