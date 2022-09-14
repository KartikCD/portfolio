import * as React from "react";
import classnames from "classnames";

import styles from "./SvgImageContainer.module.css";

export interface Props extends React.ObjectHTMLAttributes<HTMLObjectElement> {
  data: string;
  className?: string;
  svgAlt: string;
}

export const SvgImageContainer: React.FC<Props> = React.memo(
  ({ data, className, svgAlt, ...rest }) => {
    const composedClassnames = classnames(styles.svg, className);

    return (
      <object
        className={composedClassnames}
        data={data}
        aria-label={svgAlt}
        aria-labelledby={svgAlt}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    );
  }
);
