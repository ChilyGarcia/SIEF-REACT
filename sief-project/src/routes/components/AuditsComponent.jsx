import React, { useState, useEffect } from "react";
import styles from "../../styles/auditsStyle.module.css";

export const AuditsComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 5;

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

    fetchData();
  }, []);

  const tableClassAudits = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClassAudits = estadoSideBar ? styles.thOpen : styles.thClose;
  const paginationClassAudits = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <tr key={index} className={styles["fixed-height-row"]}>
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
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        <button
          onClick={() =>
            handlePageChange((prevPage) =>
              prevPage > 1 ? prevPage - 1 : prevPage
            )
          }
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className="current-page">{currentPage}</span>
        <button
          onClick={() =>
            handlePageChange((prevPage) =>
              prevPage < totalPages ? prevPage + 1 : prevPage
            )
          }
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};
