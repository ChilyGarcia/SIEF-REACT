import React from "react";
import styles from "../../styles/statisticalInformationStyles.module.css";

export const StatisticalInformationComponent = ({estadoSideBar}) => {

  const tableClass = estadoSideBar ? styles.tableOpen : styles.tableClose
  const thClass = estadoSideBar ? styles.thOpen : styles.thClose

    
  return (
    <>
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
          <tr>
            <td className={styles["text-left"]}>January</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
          </tr>
          <tr>
            <td className={styles["text-left"]}>February</td>
            <td className={styles["text-left"]}>$ 10,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
          </tr>
          <tr>
            <td className={styles["text-left"]}>March</td>
            <td className={styles["text-left"]}>$ 85,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
          </tr>
          <tr>
            <td className={styles["text-left"]}>April</td>
            <td className={styles["text-left"]}>$ 56,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
          </tr>
          <tr>
            <td className={styles["text-left"]}>May</td>
            <td className={styles["text-left"]}>$ 98,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
            <td className={styles["text-left"]}>$ 50,000.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
