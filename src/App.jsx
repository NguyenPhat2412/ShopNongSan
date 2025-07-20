// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppHome from "./components/Home/app.home";
import AppLogin from "./components/Login/app.login";
import AppRegister from "./components/Register/app.register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/account/login" element={<AppLogin />} />
        <Route path="/account/register" element={<AppRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
