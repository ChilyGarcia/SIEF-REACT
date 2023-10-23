import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { NewStatisticalInformationComponent } from "./components/NewStatisticalInformationComponent";

export const NewInformationScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };
  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <NewStatisticalInformationComponent estadoSideBar={isOpen}></NewStatisticalInformationComponent>
    </>
  );
};
