import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioComponent from "./Components/Portfolio/portfolio";
import CodeComponent from "./Components/Work/code";
import FoodComponent from "./Components/Work/food";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const app = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<PortfolioComponent />} />
        <Route path="/code" element={<CodeComponent />} />
        <Route path="/food" element={<FoodComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
