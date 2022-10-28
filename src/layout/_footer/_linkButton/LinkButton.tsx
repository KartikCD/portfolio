import Link from "next/link";
import * as React from "react";
import { SvgImageContainer } from "../../../ui-components";

import styles from "./LinkButton.module.css";

interface Props {
  href: string;
  data: string;
  alt: string;
}

const LinkButton: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({ href, children, alt, data }) => {
    return (
      <Link
        href={href ?? "#"}
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.container}>
          <div className={styles.dataContainer}>
            <SvgImageContainer
              className={styles.imageContainer}
              data={data}
              svgAlt={alt}
            />
            {children}
          </div>
        </button>
      </Link>
    );
  }
);

export default LinkButton;
