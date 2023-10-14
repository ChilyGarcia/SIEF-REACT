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

export const GraphicsCompontent = () => {
  const data = {
    labels: ["2019", "2020", "2021"],
    datasets: [
      {
        label: "Matriculados",
        data: [3, 6, 9],
        backgroundColor: "rgba(255,235,167)",
        borderColor: "rgba(255,235,167)",
        borderWidth: 1,
      },
      {
        label: "Graduados",
        data: [2, 4, 6],
        backgroundColor: "rgba(255,235,167)",
        borderColor: "rgba(255,235,167)",
        borderWidth: 1,
      },
    ],
  };

  const options = {};
  return (
    <>
      <div className={styles.container}>
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
