import * as React from "react";
import { LayoutContext } from "../../../../layout/_context/LayoutContextProvider";
import { SvgImageContainer } from "../../../../ui-components";

import styles from "./IconItem.module.css";

interface Props {
  href: string;
  data: string;
  alt: string;
}

const IconItem: React.FC<Props> = React.memo(({ href, data, alt }) => {
  const { theme } = React.useContext(LayoutContext);

  return (
    <a
      href={href}
      className={styles.container}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SvgImageContainer
        data={`/images/${theme}/${data}`}
        svgAlt={alt}
        className={styles.svgContainer}
      />
    </a>
  );
});

export default IconItem;
