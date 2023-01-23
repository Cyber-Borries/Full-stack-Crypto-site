import "./App.css";
import AppLayout from "./components/AppLayout";
import CircleChart from "./components/CircleChart";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <AppLayout />
      <CircleChart />
    </div>
  );
}

export default App;
