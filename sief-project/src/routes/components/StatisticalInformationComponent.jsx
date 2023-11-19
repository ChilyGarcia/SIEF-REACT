import React, { useState, useEffect } from "react";
import styles from "../../styles/statisticalInformationStyles.module.css";
import ExcelJS from "exceljs";

export const StatisticalInformationComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para la búsqueda
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/all-info");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const exportToExcel = async () => {
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Información Estadística");

      // Agregar encabezados de columnas
      const headers = [
        "Código",
        "Programa",
        "Periodo",
        "Inscritos",
        "Admitidos",
        "Matriculados",
        "Graduados",
      ];
      worksheet.addRow(headers);

      // Agregar todos los datos a la hoja de cálculo
      filteredData.forEach((item) => {
        const row = Object.values(item);
        worksheet.addRow(row);
      });

      // Crear un Blob (Binary Large Object) con el archivo Excel
      const blob = await workbook.xlsx.writeBuffer();

      // Crear un objeto URL para el Blob
      const blobUrl = URL.createObjectURL(new Blob([blob]));

      // Crear un enlace (link) y simular un clic para descargar el archivo
      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", "informacion_estadistica.xlsx");
      document.body.appendChild(link);
      link.click();

      // Limpiar el enlace y el objeto URL
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error exporting to Excel:", error);
    }
  };

  const tableClass = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClass = estadoSideBar ? styles.thOpen : styles.thClose;
  const inputContainerClass = estadoSideBar
    ? styles.inputContainerOpen
    : styles.inputContainerClose;

  const paginationClass = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtra los datos en función del término de búsqueda
  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) => typeof value === "string" && value.includes(searchTerm)
    )
  );

  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles.buttonGroup}>
 
            <button className="btn btn-outline-success" onClick={exportToExcel}>
              Excel
            </button>
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
