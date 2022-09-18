import * as React from "react";
import classnames from "classnames";

import { Experience } from "../../../data/types";
import styles from "./DescriptionItem.module.css";
import IconItem from "./_iconItem/IconItem";

interface Props {
  experience: Experience;
}

const DescriptionItem: React.FC<Props> = React.memo(({ experience }) => {
  const listBullets = React.useMemo(() => {
    const exp = experience?.description.split("\n");
    return exp?.map((e) => {
      return (
        <li className={styles.list} dangerouslySetInnerHTML={{ __html: e }} />
      );
    });
  }, [experience]);

  return (
    <div className={styles.container}>
      <div className={styles.companyNameContainer}>
        <p className={styles.companyName}>{experience?.company}</p>
        <p className={styles.companyDuration}>{experience?.duration}</p>
      </div>
      <div
        className={classnames(
          styles.companyNameContainer,
          styles.locationContainer
        )}
      >
        <div>
          <p className={styles.companyRole}>{experience?.role}</p>
          <p className={styles.companyLocation}>{experience?.city}</p>
        </div>
        <div>
          {experience?.website !== undefined ? (
            <IconItem
              href={experience?.website as unknown as string}
              data="vector_link.svg"
              alt="Website"
            />
          ) : (
            <></>
          )}
          {experience?.github !== undefined ? (
            <IconItem
              href={experience?.github as unknown as string}
              data="vector_github.svg"
              alt="Github"
            />
          ) : (
            <></>
          )}
          {experience?.letter !== undefined ? (
            <IconItem
              href={experience?.letter as unknown as string}
              data="vector_letter.svg"
              alt="Letter"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.companyDescription}>
        <ul className={styles.unOrderList}>{listBullets}</ul>
      </div>
      <p className={styles.techStack}>
        {experience?.stack?.join("\xa0\xa0\xa0-\xa0\xa0\xa0")}
      </p>
    </div>
  );
});

export default DescriptionItem;
