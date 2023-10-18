import React from "react";
import styles from "../../styles/graphicsStyles.module.css";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const GraphicsCompontent = ({estadoSideBar}) => {

  console.log(estadoSideBar)


  const containerClass = estadoSideBar ? styles.containerOpen : styles.containerClosed;

  const data = {
    labels: ["2019", "2020", "2021"],
    datasets: [
      {
        label: "Matriculados",
        data: [3, 6, 9],
        backgroundColor: "rgba(79, 95, 221, 0.8)",
        borderColor: "rgba(79, 95, 221, 0.8)",
        borderWidth: 1,
      },
      {
        label: "Graduados",
        data: [2, 4, 6],
        backgroundColor: "rgba(57, 242, 140, 0.8)",
        borderColor: "rgba(57, 242, 140, 0.8)",
        borderWidth: 1,
      },
    ],
  };

  const options = {};
  return (
    <>
      <div className={containerClass}>
        <div className={styles.card}>
          <Bar data={data} options={options}></Bar>
        </div>

        <div className={styles.card2}>
          <Bar data={data} options={options}></Bar>
        </div>
      </div>
    </>
  );
};
