import React, { useState, useEffect } from "react";
import styles from "../../styles/statisticalInformationStyles.module.css";

export const StatisticalInformationComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Datos simulados (ajusta estos datos según tus necesidades)
  const data = [
    {
      Código: "27001",
      Programa: "Ingenieria de software",
      Periodo: "2023",
      Inscritos: 100,
      Admitidos: 80,
      Matriculados: 70,
      Graduados: 60,
    },
    {
      Código: "27001",
      Programa: "Ingenieria de software",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "27001",
      Programa: "Ingenieria de software",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "10902",
      Programa: "Diseño grafico",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "10902",
      Programa: "Diseño gráfico",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "909092",
      Programa: "Diseño de modas",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "909092",
      Programa: "Diseño de modas",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "909092",
      Programa: "Diseño de modas",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "909092",
      Programa: "Diseño de modas",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "898978",
      Programa: "Hoteleria y turismo",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "898978",
      Programa: "Hoteleria y turismo",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "898978",
      Programa: "Hoteleria y turismo",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "898978",
      Programa: "Hoteleria y turismo",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    },
    {
      Código: "656745",
      Programa: "Negocios internacionales",
      Periodo: "2023",
      Inscritos: 90,
      Admitidos: 75,
      Matriculados: 65,
      Graduados: 55,
    }
  ];

  const tableClass = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClass = estadoSideBar ? styles.thOpen : styles.thClose;
  const inputContainerClass = estadoSideBar
  ? styles.inputContainerOpen
  : styles.inputContainerClose;

  const paginationClass = estadoSideBar ? styles.paginationOpen : styles.paginationClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={inputContainerClass}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Ingrese el programa"
            className="form-control"
          />
          <div className={styles.buttonGroup}>
            <button className="btn btn-outline-danger">Buscar</button>
            <button className="btn btn-outline-success">Excel</button>
          </div>
        </div>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            <th className={thClass}>Código</th>
            <th className={thClass}>Programa</th>
            <th className={thClass}>Periodo</th>
            <th className={thClass}>Inscritos</th>
            <th className={thClass}>Admitidos</th>
            <th className={thClass}>Matriculados</th>
            <th className={thClass}>Graduados</th>
          </tr>
        </thead>
        <tbody className={styles["table-hover"]}>
          {currentData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i} className={styles["text-left"]}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={paginationClass}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

