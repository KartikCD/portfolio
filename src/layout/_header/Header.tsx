import * as React from "react";
import { SvgImageContainer } from "../../ui-components";
import styles from "./Header.module.css";
import useHeader from "./useHeader";

export const Header = React.memo(() => {
  const { theme, onClick } = useHeader();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <a href="#" className={styles.titleText}>
          KartikCD
        </a>
        <button className={styles.buttonStyle} onClick={onClick}>
          <SvgImageContainer
            data={`/images/${theme}/vector_sun.svg`}
            svgAlt="Theme"
            className={styles.svgContainer}
          />
        </button>
      </div>
    </div>
  );
});
