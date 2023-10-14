import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomeScreen } from "./routes/homeScreen";
import { LoginSignInScreen } from "./routes/LoginSignInScreen";
import { GraphicsScreen } from "./routes/GraphicsScreen";
import { StatisticalInfoScreen } from "./routes/StatisticalInfoScreen";
import { AuditsScreen } from "./routes/AuditsScreen";
import { HistoricInformationScreen } from "./routes/HistoricInformationScreen";
import { NewInformationScreen } from "./routes/NewInformationScreen";
import { NewUserScreen } from "./routes/NewUserScreen";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignInScreen />} />
        <Route path="/inicio" element={<GraphicsScreen />}></Route>
        <Route path="/graficas" element={<GraphicsScreen />}></Route>
        <Route path="/infoEstadistica" element={<StatisticalInfoScreen />}></Route>
        <Route path="/auditorias" element={<AuditsScreen/>}></Route>
        <Route path="/nuevaInfo" element={<NewInformationScreen/>}></Route>
        <Route path="/infoHistorica" element={<HistoricInformationScreen/>}></Route>
        <Route path="/nuevoUsuario" element={<NewUserScreen/>}></Route>  
      </Routes>
    </>
  );
};
