import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/about"
          element={
            <div>
              <div>Converstions</div>
              <Outlet />
            </div>
          }
        />

        <Route path=":id" element={<div>Converstion ID pAGE</div>} />
      </Routes>
    </>
  );
}

export default App;
