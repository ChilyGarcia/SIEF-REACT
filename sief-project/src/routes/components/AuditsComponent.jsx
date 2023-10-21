import React, { useState } from "react";
import styles from "../../styles/auditsStyle.module.css";

export const AuditsComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    {
      Acción: "Crear",
      Programa: "Ingenieria de software",
      Fecha: "2023-04-5",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Ingenieria de software",
      Fecha: "2023-02-2",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Diseño gráfico",
      Fecha: "2023-04-4",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Diseño de modas",
      Fecha: "2023-10-5",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Diseño de modas",
      Fecha: "2023-09-30",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Diseño de modas",
      Fecha: "2023-09-1",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Hoteleria y turismo",
      Fecha: "2023-04-3",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Hoteleria y turismo",
      Fecha: "2023-01-1",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Negocios internacionales",
      Fecha: "2023-05-2",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Ingenieria de software",
      Fecha: "2023-02-3",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Ingenieria de software",
      Fecha: "2023-08-12",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Diseño de modas",
      Fecha: "2023-08-16",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Diseño de modas",
      Fecha: "2023-02-2",
      Usario: "Admin",
    },
    {
      Acción: "Crear",
      Programa: "Diseño gráfico",
      Fecha: "2023-05-2",
      Usario: "Admin",
    },
  ];
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
            <th className={thClassAudits}>Acción</th>
            <th className={thClassAudits}>Programa</th>
            <th className={thClassAudits}>Fecha</th>
            <th className={thClassAudits}>Usuario</th>
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
