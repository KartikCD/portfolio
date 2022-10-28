import * as React from "react";
import Image from "next/image";
import styles from "./Objective.module.css";

const Objective = React.memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.containerDetails}>
        <p className={styles.heyText}>Hey, I’m</p>
        <p className={styles.nameText}>Kartik Chawda</p>
        <p className={styles.descriptionText}>
          I’m a frontend developer based in Mumbai, India. I love creating
          applications both for web and android. I am currently working as a
          frontend developer at ECARMA – Common Area Maintenance Experts and
          I’ve manage to gain a decent amount of experience and valuable
          knowledge from all kinds of fields throughout my projects/work.
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
      <div className={styles.containerImage}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/dark/profile_image.JPG"
            alt="Profile Picture"
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
});

export default Objective;
