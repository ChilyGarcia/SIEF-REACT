import { loginHook } from "../hooks/loginHook";
import { useRef, useEffect } from "react";
import styles from "../styles/logInStyles.css";
import { SignInComponent } from "./SignInComponent";

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

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Iniciar sesión</span>
                  <span>Registrarse</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Iniciar sesión</h4>

                          <form onSubmit={onSubmit}>
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Digite su email"
                                id="email"
                                autoComplete="off"
                                ref={formRef}
                                value={email}
                                onChange={(event) => onInputChange(event)}
                              ></input>
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Digite su contraseña"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(event) => onInputChange(event)}
                              ></input>
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>

                            <button
                              type="submit"
                              className="mb-0 mt-4 btn btn-primary"
                            >
                              Ingresar
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
