import './App.css';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Assignments from './pages/Assignments';
import Project from './pages/Project';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/ipmG17" index element={<HomePage />} />
          <Route path="/assignments" element={<Assignments/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
