import * as React from "react";

import { Experience } from "../../data/types";
import styles from "./Experience.module.css";
import useExperience from "./useExperience";
import CompanyCardItem from "./_companyCardItem/CompanyCardItem";
import DescriptionItem from "./_descriptionItem/DescriptionItem";

interface Props {
  experiences: Array<Experience>;
}

const ExperienceComponent: React.FC<Props> = React.memo(({ experiences }) => {
  const { experience, onExperienceClick } = useExperience(experiences);

  const listItems = React.useMemo(() => {
    if (experience !== undefined) {
      return experiences?.map((e) => {
        const exp = e as Experience;
        return (
          <CompanyCardItem
            key={exp.id}
            experience={exp}
            selectedExperience={experience as unknown as Experience}
            onClick={onExperienceClick}
          />
        );
      });
    }
    return <></>;
  }, [experience, experiences, onExperienceClick]);

  return (
    <div className={styles.container} id="experiences">
      <p className={styles.titleText}>experience</p>
      <div className={styles.gridContainer}>{listItems}</div>
      {experience !== undefined ? (
        <div className={styles.descriptionContainer}>
          <DescriptionItem experience={experience} />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.emptyContainer} />
    </div>
  );
});

export default ExperienceComponent;
