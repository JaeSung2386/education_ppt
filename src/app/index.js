import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header";
import Dashboard from "../dashboard";
import Render from "../educations";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Dashboard />
        <Routes>
          <Route path="/render" element={<Render />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
