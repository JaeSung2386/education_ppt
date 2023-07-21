import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header";
import Dashboard from "../dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
