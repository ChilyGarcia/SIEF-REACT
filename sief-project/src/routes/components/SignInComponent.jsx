import React from "react";
import { signInHook } from "../../hooks/signInHook";
import Swal from "sweetalert2";
import styles from "../../styles/loginStyles.module.css";

export const SignInComponent = () => {
  const dataSignIn = {
    nombres: "",
    email: "",
    password: "",
  };

  const { form, onInputChange } = signInHook(dataSignIn);

  const { nombres, email, password } = form;

  const onSubmit = (event) => {
    event.preventDefault();

    if (nombres == "" || email == "" || password == "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se puede hacer el registro con datos en blanco",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tus datos han sido registrados correctamente.",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });

      console.log(form);
    }
  };

  return (
    <>
      <div className={styles["card-back"]}>
        <div className={styles["center-wrap"]}>
          <div className={styles["section"] + " text-center"}>
            <h4 className={`mb-4 pb-3 ${styles["custom-heading"]}`}>Registrarse</h4>
            <form onSubmit={onSubmit}>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  name="nombres"
                  className={styles["form-style"]}
                  placeholder="Nombres y apellidos"
                  id="nombres"
                  autoComplete="off"
                  value={nombres}
                  onChange={(event) => onInputChange(event)}
                ></input>
                <i className={styles["input-icon"] + " uil uil-user"}></i>
              </div>
              <div className={styles["form-group"] + " mt-2"}>
                <input
                  type="email"
                  name="email"
                  className={styles["form-style"]}
                  placeholder="Email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(event) => onInputChange(event)}
                ></input>
                <i className={styles["input-icon"] + " uil uil-at"}></i>
              </div>
              <div className={styles["form-group"] + " mt-2"}>
                <input
                  type="password"
                  name="password"
                  className={styles["form-style"]}
                  placeholder="Contraseña"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(event) => onInputChange(event)}
                ></input>
                <i className={styles["input-icon"] + " uil uil-lock-alt"}></i>
              </div>

              <button type="submit" className={styles["btn"] + " mt-4"}>
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
