import React from "react";
import { LogInComponent } from "./components/LogInComponent";
import { InicioScreen } from "./routes/InicioScreen";
import { Route, Routes, Navigate } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInComponent />} />
        <Route path="/inicio" element={<InicioScreen></InicioScreen>}></Route>
      </Routes>
    </>
  );
};
