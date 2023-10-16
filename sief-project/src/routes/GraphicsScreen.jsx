import React from "react";
import { PanelComponent } from "./components/PanelComponent";
import { GraphicsCompontent } from "./components/GraphicsCompontent";
import styles from "../styles/graphicsStyles.module.css";

export const GraphicsScreen = () => {
  return (
    <>
      <PanelComponent></PanelComponent>
      <div className={styles.body}></div>
      <GraphicsCompontent></GraphicsCompontent>
    </>
  );
};
