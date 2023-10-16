import React, { useState } from "react";
import styles from "../../styles/panelStyles.module.css";
import { Link } from "react-router-dom";

export const PanelComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.panelContainer}>
      <div
        className={`${styles.navbar} ${
          isSidebarOpen ? styles["navbar-open"] : ""
        }`}
      >
        <button onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles["sidebar-open"] : ""
        }`}
      >
        <div className={styles["sidebar-content"]}>
          <nav className={`${styles["main-menu"]} ${styles["sidebar-open"]}`}>
            <ul>
              <li>
                <Link to="/graficas" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-bar-chart-o fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>Gráficas</span>
                </Link>
              </li>
              <li>
                <Link to="/infoEstadistica" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-book fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>
                    Información estadística
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/auditorias" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-table fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>Auditorias</span>
                </Link>
              </li>
              <li className={styles["has-subnav"]}>
                <Link to="/nuevaInfo" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-plus fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>Nueva información</span>
                </Link>
              </li>
              <li>
                <Link to="/infoHistorica" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-info fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>
                    Informacion histórica
                  </span>
                </Link>
              </li>
              <li className={styles["has-subnav"]}>
                <Link to="/nuevoUsuario" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-user fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>Nuevo usuario</span>
                </Link>
              </li>
            </ul>

            <ul className={styles.logout}>
              <li>
                <Link to="/login" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-power-off fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>Cerrar sesión</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
