import * as React from "react";
import { LayoutContext } from "../../layout/_context/LayoutContextProvider";
import styles from "./Footer.module.css";
import LinkButton from "./_linkButton/LinkButton";

const Footer = React.memo(() => {
  const { theme } = React.useContext(LayoutContext);

  return (
    <section className={styles.container} id="contact">
      <p className={styles.contactText}>Contact</p>
      <div className={styles.buttonsContainer}>
        <LinkButton
          href="https://mail.google.com/mail/?view=cm&fs=1&to=chawdakartik@gmail.com"
          data={`/images/${theme}/vector_mail.svg`}
          alt="Email"
        >
          Send an email
        </LinkButton>
        <LinkButton
          href="/resume/KartikChawda_4-3-22.pdf"
          data={`/images/${theme}/vector_letter.svg`}
          alt="Resume"
        >
          Resume
        </LinkButton>
        <LinkButton
          href="https://github.com/KartikCD/KartikCD"
          data={`/images/${theme}/vector_github.svg`}
          alt="Github"
        >
          Github
        </LinkButton>
        <LinkButton
          href="https://www.linkedin.com/in/kartikchawda"
          data={`/images/${theme}/vector_linkedin.svg`}
          alt="Linkedin"
        >
          Linkedin
        </LinkButton>
      </div>
    </section>
  );
});

export default Footer;
