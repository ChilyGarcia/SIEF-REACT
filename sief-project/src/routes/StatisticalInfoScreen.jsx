import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { StatisticalInformationComponent } from "./components/StatisticalInformationComponent";

export const StatisticalInfoScreen = () => {

  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };


  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <StatisticalInformationComponent estadoSideBar={isOpen}></StatisticalInformationComponent>
    </>
  );
};
