import { loginHook } from "../../hooks/loginHook";
import { useRef, useEffect } from "react";
import styles from "../../styles/loginStyles.module.css";
import { SignInComponent } from "./SignInComponent";
import Swal from "sweetalert2";

export const LogInComponent = () => {
  const formRef = useRef();

  useEffect(() => {
    formRef.current.focus();
  }, []);

  const dataLogIn = {
    email: "",
    password: "",
  };

  const { form, onInputChange } = loginHook(dataLogIn);

  const { email, password } = form;

  const validacionToken = () => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      console.log("Existe token, ingrese");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response) throw new Error("Error request");

      if (response.status === 200) {
        console.log("Login successful");
        const responseData = await response.json();
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("user", responseData.email);
        localStorage.setItem("role", responseData.role);

        window.location.href = "graficas";
      } else {
        console.log("Login failed");
        console.log(email, password);

        Swal.fire({
          icon: "error",
          title: "Incorrecto",
          text: "Email o contraseña incorrectas",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    } catch (error) {
      console.log("Error", error);
    }

    validacionToken();
  };

  return (
    <>
      <div className={`${styles.section} ${styles["inicioBackground"]}`}>
        <div className={styles.container}>
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className={`mb-0 pb-3 ${styles["custom-span"]}`}>
                  <span>Iniciar sesión</span>
                  <span>Registrarse</span>
                </h6>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className={styles["card-3d-wrap"] + " mx-auto"}>
                  <div className={styles["card-3d-wrapper"]}>
                    <div className={styles["card-front"]}>
                      <div className={styles["center-wrap"]}>
                        <div className={styles["section"] + " text-center"}>
                          <h4
                            className={`mb-4 pb-3 ${styles["custom-heading"]}`}
                          >
                            Iniciar sesión
                          </h4>

                          <form onSubmit={onSubmit}>
                            <div className={styles["form-group"]}>
                              <input
                                type="email"
                                name="email"
                                className={styles["form-style"]}
                                placeholder="Digite su email"
                                id="email"
                                autoComplete="off"
                                ref={formRef}
                                value={email}
                                onChange={(event) => onInputChange(event)}
                              ></input>
                              <i
                                className={styles["input-icon"] + " uil uil-at"}
                              ></i>
                            </div>
                            <div className={styles["form-group"] + " mt-2"}>
                              <input
                                type="password"
                                name="password"
                                className={styles["form-style"]}
                                placeholder="Digite su contraseña"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(event) => onInputChange(event)}
                              ></input>
                              <i
                                className={
                                  styles["input-icon"] + " uil uil-lock-alt"
                                }
                              ></i>
                            </div>

                            <button
                              type="submit"
                              className={styles["btn"] + " mt-4"}
                            >
                              Iniciar sesion
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <SignInComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
