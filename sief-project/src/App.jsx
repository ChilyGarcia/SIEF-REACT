import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginSignInScreen } from "./routes/LoginSignInScreen";
import { GraphicsScreen } from "./routes/GraphicsScreen";
import { StatisticalInfoScreen } from "./routes/StatisticalInfoScreen";
import { AuditsScreen } from "./routes/AuditsScreen";
import { HistoricInformationScreen } from "./routes/HistoricInformationScreen";
import { NewInformationScreen } from "./routes/NewInformationScreen";
import { NewUserScreen } from "./routes/NewUserScreen";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useLocalStorage } from "react-use";


export const App = () => {

  const localToken = localStorage.getItem("token");

  const [token, setToken] = useState(localToken);

  useEffect(() => {
    if (token) {
      console.log("Token exists:", token);
    } else {
      console.log("No token exists");
    }
  }, [token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignInScreen />} />
        <Route element={<ProtectedRoute canActivate={token} redirectPath='/login' />}>
          <Route path="/graficas" element={<GraphicsScreen />}></Route>
          <Route path="/inicio" element={<GraphicsScreen />}></Route>    
          <Route path="/infoEstadistica" element={<StatisticalInfoScreen />}></Route>
          <Route path="/auditorias" element={<AuditsScreen/>}></Route>
          <Route path="/nuevaInfo" element={<NewInformationScreen/>}></Route>
          <Route path="/infoHistorica" element={<HistoricInformationScreen/>}></Route>
          <Route path="/nuevoUsuario" element={<NewUserScreen/>}></Route>
          
        </Route>
      </Routes>
    </>
  );
};
