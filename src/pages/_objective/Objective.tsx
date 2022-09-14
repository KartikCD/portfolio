import * as React from "react";
import styles from "./Objective.module.css";

const Objective = React.memo(() => {
  return (
    <div className={styles.container}>
      <p className={styles.heyText}>Hey, I’m</p>
      <p className={styles.nameText}>Kartik Chawda</p>
      <p className={styles.descriptionText}>
        I'm a software engineer based in Toronto, Canada and also a
        communication and journalism student. I enjoy creating things that live
        on the internet, whether that be websites, applications, or anything in
        between. I have been freelancing for a year now while studying at the
        university and I've manage to gain a decent amount of experience and
        valuable knowledge from all different kinds of fields throughout my
        projects/work.
      </p>
      <div className={styles.buttonContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/resume/KartikChawda_4-3-22.pdf"
          className={styles.button}
        >
          Say hi &#x2192;
        </a>
      </div>
    </div>
  );
});

export default Objective;
