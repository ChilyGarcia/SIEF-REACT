import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { AuditsComponent } from "./components/AuditsComponent";

export const AuditsScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <AuditsComponent estadoSideBar={isOpen}></AuditsComponent>
    </>
  );
};
