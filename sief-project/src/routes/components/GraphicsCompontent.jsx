import React, { useState } from "react";
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

export const GraphicsCompontent = ({ estadoSideBar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [graphData, setGraphData] = useState(null);

  console.log(estadoSideBar);

  const containerClass = estadoSideBar
    ? styles.containerOpen
    : styles.containerClosed;

  const inputContainerClass = estadoSideBar
    ? styles.inputContainerOpen
    : styles.inputContainerClose;

  const handleGraphButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/info-fiveyears", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ programa: searchTerm }),
      });

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Datos recibidos:", data);

      // Actualizar los datos de las gráficas con la respuesta del servidor
      setGraphData(data);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  };

  const getChartData = (property) => {
    if (!graphData) return [];

    return graphData.map((item) => item[property]);
  };

  const data = {
    labels: getChartData("periodo"),
    datasets: [
      {
        label: "Matriculados",
        data: getChartData("matriculados"),
        backgroundColor: "rgba(79, 95, 221, 0.8)",
        borderColor: "rgba(79, 95, 221, 0.8)",
        borderWidth: 1,
      },
      {
        label: "Graduados",
        data: getChartData("graduados"),
        backgroundColor: "rgba(57, 242, 140, 0.8)",
        borderColor: "rgba(57, 242, 140, 0.8)",
        borderWidth: 1,
      },

      // ... Otros conjuntos de datos según tus necesidades
    ],
  };
  const data2 = {
    labels: getChartData("periodo"),
    datasets: [
      {
        label: "Inscritos",
        data: getChartData("inscritos"),
        backgroundColor: "rgba(79, 95, 221, 0.8)",
        borderColor: "rgba(79, 95, 221, 0.8)",
        borderWidth: 1,
      },
      {
        label: "Admitidos",
        data: getChartData("admitidos"),
        backgroundColor: "rgba(57, 242, 140, 0.8)",
        borderColor: "rgba(57, 242, 140, 0.8)",
        borderWidth: 1,
      },

      // ... Otros conjuntos de datos según tus necesidades
    ],
  };

  const options = {};

  return (
    <>
      <div className={inputContainerClass}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Ingrese el programa"
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles.buttonGroup}>
            <button
              className="btn btn-outline-danger"
              onClick={handleGraphButtonClick}
            >
              Graficar
            </button>
          </div>
        </div>
      </div>
      <div className={containerClass}>
        <div className={styles.card}>
          <Bar data={data} options={options}></Bar>
        </div>
        <div className={styles.card}>
          <Bar data={data2} options={options}></Bar>
        </div>
        {/* Otras gráficas según tus necesidades */}
      </div>
    </>
  );
};
