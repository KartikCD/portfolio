import * as React from "react";
import styles from "./LinkItem.module.css";

interface Props {
  href: string;
}

export const LinkItem: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({ children, href }) => {
    return (
      <a href={href} className={styles.linkItemText}>
        {children}
      </a>
    );
  }
);
