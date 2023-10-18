import React, { useState } from "react";
import { PanelComponent } from "./components/PanelComponent";
import { GraphicsCompontent } from "./components/GraphicsCompontent";
import styles from "../styles/graphicsStyles.module.css";

export const GraphicsScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <GraphicsCompontent estadoSideBar={isOpen}></GraphicsCompontent>
    </>
  );
};
