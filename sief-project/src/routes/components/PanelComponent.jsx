import React from "react";
import styles from "../../styles/panelStyles.module.css";
import { Link } from "react-router-dom";

export const PanelComponent = () => {
  return (
    <>
      <div className={styles.area}></div>
      <nav className={styles["main-menu"]}>
        <ul>
          <li>
            <a href="#">
              <i
                className={`fa fa-bar-chart-o fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
              ></i>
              <span className={styles["nav-text"]}>Gráficas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i
                className={`fa fa-book fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
              ></i>

              <span className={styles["nav-text"]}>
                Información estadistica
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i
                className={`fa fa-table fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
              ></i>
              <span className={styles["nav-text"]}>Auditorias</span>
            </a>
          </li>
          <li className={styles["has-subnav"]}>
            <a href="#">
              <i
                className={`fa fa-plus fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
              ></i>
              <span className={styles["nav-text"]}>Nueva información</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i
                className={`fa fa-info fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
              ></i>
              <span className={styles["nav-text"]}>Informacion histórica</span>
            </a>
          </li>
          <li className={styles["has-subnav"]}>
            <a href="#">
              <i
                className={`fa fa-user fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
              ></i>
              <span className={styles["nav-text"]}>Nuevo usuario</span>
            </a>
          </li>
        </ul>

        <ul className={styles.logout}>
          <li>
            <Link to="/login">
              <i
                className={`fa fa-power-off fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
              ></i>
              <span className={styles["nav-text"]}>Cerrar sesión</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
