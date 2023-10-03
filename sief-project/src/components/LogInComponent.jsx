import { formHooks } from "../hooks/formHooks";
import { useRef, useEffect } from "react";
import styles from "../styles/logInStyles.css";

export const LogInComponent = () => {
  const formRef = useRef();

  useEffect(() => {
    formRef.current.focus();
  }, []);

  const dataLogIn = {
    email: "",
    password: "",
  };

  const { form, onInputChange } = formHooks(dataLogIn);

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
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Registrarse</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" className="btn mt-4">
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
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
