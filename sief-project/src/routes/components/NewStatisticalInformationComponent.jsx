import React from "react";
import styles from "../../styles/newInformationStyle.module.css";
import { newInformation } from "../../hooks/newStatisticalInformationHook.js";
import Swal from "sweetalert2";

export const NewStatisticalInformationComponent = () => {
  const dataNewInfo = {
    codigo: "",
    programa: "",
    periodo: "",
    inscritos: "",
    admitidos: "",
    matriculados: "",
    graduados: "",
  };

  const dataAudit = {
    accion: "Crear",
    programa: "programa",
    fecha: "fecha",
    usuario: localStorage.getItem("user"),
  };

  const { form, onInputChange } = newInformation(dataNewInfo);

  const {
    codigo,
    programa,
    periodo,
    inscritos,
    admitidos,
    matriculados,
    graduados,
  } = form;

  const onSubmit = async () => {
    event.preventDefault();

    const user = localStorage.getItem("user");

    if (
      codigo == "" ||
      programa == "" ||
      periodo == "" ||
      inscritos == "" ||
      matriculados == "" ||
      admitidos == "" ||
      graduados == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se puede agregar nueva informacion con datos en blanco",
      });
    } else {
      try {
        // Validar que el periodo tenga el formato adecuado
        const periodoRegex = /^\d{4}-(1|2)$/;

        if (!periodo.match(periodoRegex)) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "El periodo debe tener el formato correcto (****-1 o ****-2)",
          });
          return;
        }
        const response = await fetch(
          "http://localhost:3000/api/new-information",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        const responseAudit = await fetch(
          "http://localhost:3000/api/new-audit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataAudit),
          }
        );

        if (!response) {
          throw new Error("Error al registrar nueva informacion");
        }

        console.log(response);
        console.log(responseAudit);
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "Informacion guardada satisfactoriamente",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    console.log(form);
  };
  return (
    <>
      <form className={styles.formNew} onSubmit={onSubmit}>
        <div className={styles.group}>
          <input
            type="text"
            name="codigo"
            placeholder="codigo"
            id="codigo"
            value={codigo}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="programa"
            placeholder="programa"
            id="programa"
            value={programa}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="periodo"
            placeholder="periodo"
            id="periodo"
            value={periodo}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="inscritos"
            placeholder="inscritos"
            id="inscritos"
            value={inscritos}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="admitidos"
            placeholder="admitidos"
            id="admitidos"
            value={admitidos}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="matriculados"
            placeholder="matriculados"
            id="matriculados"
            value={matriculados}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="graduados"
            placeholder="graduados"
            id="graduados"
            value={graduados}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>

        <button
          type="submit"
          className={`${styles["button"]} ${styles["buttonBlue"]}`}
        >
          Enviar
          <div className={`${styles["ripples"]} ${styles["buttonRipples"]}`}>
            <span className="ripplesCircle"></span>
          </div>
        </button>
      </form>
    </>
  );
};
