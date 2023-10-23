import React from "react";
import styles from "../../styles/newInformationStyle.module.css";

export const NewUsersComponent = () => {
  return (
    <>
      <form className={styles.formNew}>
        <div className={styles.group}>
          <input type="text" />
          <span className={styles.highlight}></span>
          <span class={styles.bar}></span>
          <label className={styles.labelForm}>Usuario</label>
        </div>
        <div className={styles.group}>
          <input type="text" />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelForm}>Rol</label>
        </div>

        <button
          type="button"
          className={`${styles["button"]} ${styles["buttonBlue"]}`}
        >
          Crear
          <div className={`${styles["ripples"]} ${styles["buttonRipples"]}`}>
            <span className="ripplesCircle"></span>
          </div>
        </button>
      </form>
    </>
  );
};
