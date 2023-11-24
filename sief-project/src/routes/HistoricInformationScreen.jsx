import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { HistoricInformationComponent } from "./components/HistoricInformationComponent";

export const HistoricInformationScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };
  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <HistoricInformationComponent
        estadoSideBar={isOpen}
      ></HistoricInformationComponent>
    </>
  );
};
