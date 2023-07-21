import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { presentations, subPresentations } from "../data/presentation";
import "./style.css";
import EducationItem from "./educationitem";

function Dashboard() {
  return (
    <main>
      <div className="dashboard-wrapper">
        <EducationItem />
      </div>
    </main>
  );
}

export default Dashboard;
