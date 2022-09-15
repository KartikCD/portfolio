import * as React from "react";
import classnames from "classnames";

import { Experience } from "../../../data/types";
import styles from "./CompanyCardItem.module.css";

interface Props {
  experience: Experience;
  selectedExperience: Experience;
  onClick: (value: Experience) => void;
}

const CompanyCardItem: React.FC<Props> = React.memo(
  ({ experience, selectedExperience, onClick }) => {
    let composedClassnames;
    if (experience?.id === selectedExperience?.id) {
      composedClassnames = classnames(styles.buttonContainer, styles.checked);
    } else {
      composedClassnames = classnames(styles.buttonContainer);
    }

    const onButtonClick = React.useCallback(() => {
      onClick(experience);
    }, [experience, onClick]);

    return (
      <button className={composedClassnames} onClick={onButtonClick}>
        {experience?.shortName}
      </button>
    );
  }
);

export default CompanyCardItem;
