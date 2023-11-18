import React, { useState } from "react";
import styles from "../../styles/newInformationStyle.module.css";
import { signInHook } from "../../hooks/signInHook";
import Swal from "sweetalert2";

export const NewUsersComponent = () => {
  const dataSignIn = {
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
    role: "user",
  };

  const { form, onInputChange } = signInHook(dataSignIn);

  const { nombres, email, password, apellidos } = form;

  const [selectedRole, setSelectedRole] = useState("user");

  const onSubmit = async (event) => {
    event.preventDefault();

    form.role = selectedRole;

    if (nombres == "" || email == "" || password == "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se puede hacer el registro con datos en blanco",
      });
    } else {
      try {
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response) {
          throw new Error("Error al registrar nuevo usuario");
        }

        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "Tus datos han sido registrados correctamente.",
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

  const onRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  return (
    <>
      <form className={styles.formNew} onSubmit={onSubmit}>
        <div className={styles.group}>
          <input
            type="text"
            name="nombres"
            placeholder="nombres"
            id="nombres"
            value={nombres}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="apellidos"
            placeholder="apellidos"
            id="apellidos"
            value={apellidos}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            value={email}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={(event) => onInputChange(event)}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
        </div>

        <div className={styles.group}>
          {/* Reemplaza el input de texto con un select */}
          <select
            className="form-select"
            value={selectedRole}
            onChange={onRoleChange}
          >
            <option value="user">Usuario</option>
            <option value="admin">Administrado</option>
            <option value="director">Director</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
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
