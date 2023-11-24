import React, { useState, useEffect } from "react";
import styles from "../../styles/auditsStyle.module.css";

export const HistoricInformationComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    {
      nombre: "Informes estadisticos",
      periodo: "2012-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2012_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2012-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2012_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2013-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2013_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2013-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2013_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2014-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2014_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2014-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2014_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2015-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2015_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2015-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2015_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2016-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2016_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2016-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2016_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2017-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2017_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2017-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2017_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2018-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2018_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2018-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2018_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2019-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2019_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2019-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2019_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2020-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2020_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2020-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2020_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2021-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2021_01.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2021-2",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2021_02.pdf",
    },
    {
      nombre: "Informes estadisticos",
      periodo: "2022-1",
      accion:
        "http://200.119.89.147/sief/cod/informes_estadisticos/Informes_est_2022_01.pdf",
    },
  ];

  const handleButtonClick = (url) => {
    window.location = url;
  };

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/all-audit");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    *

    fetchData();
  }, []);


  */
  const tableClassAudits = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClassAudits = estadoSideBar ? styles.thOpen : styles.thClose;

  const paginationClassAudits = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <table className={tableClassAudits}>
        <thead>
          <tr>
            <th className={thClassAudits}>Nombre</th>
            <th className={thClassAudits}>Periodo</th>
            <th className={thClassAudits}>Accion</th>
          </tr>
        </thead>
        <tbody className={styles["table-hover"]}>
          {currentData.map((item, index) => (
            <tr key={index} className={styles["fixed-height-row"]}>
              <td className={styles["text-left"]}>{item.nombre}</td>
              <td className={styles["text-left"]}>{item.periodo}</td>
              <td className={styles["text-left"]}>
                <button
                  onClick={() => handleButtonClick(item.accion)}
                  className={styles.button}
                >
                  <img
                    src="/archivo-pdf.png"
                    alt="Ver Detalles"
                    className={styles["img-styles"]}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={paginationClassAudits}>
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
