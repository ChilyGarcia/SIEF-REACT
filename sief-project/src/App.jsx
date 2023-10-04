import React from "react";
import { InicioScreen } from "./routes/InicioScreen";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginSignInScreen } from "./routes/LoginSignInScreen";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignInScreen />} />
        <Route path="/inicio" element={<InicioScreen></InicioScreen>}></Route>
      </Routes>
    </>
  );
};
