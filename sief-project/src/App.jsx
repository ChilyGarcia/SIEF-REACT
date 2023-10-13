import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomeScreen } from "./routes/homeScreen";
import { LoginSignInScreen } from "./routes/LoginSignInScreen";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignInScreen/>} />
        <Route path="/inicio" element={<HomeScreen/>}></Route>
      </Routes>
    </>
  );
};
