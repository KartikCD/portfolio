import * as React from "react";
import { Project } from "../../../data/types";
import { LayoutContext } from "../../../layout/_context/LayoutContextProvider";
import { SvgImageContainer } from "../../../ui-components";
import styles from "./CardItem.module.css";
import IconItem from "./_iconItem/IconItem";

interface Props {
  project: Project;
}

const CardItem: React.FC<Props> = React.memo(({ project }) => {
  const { theme } = React.useContext(LayoutContext);

  const listBullets = React.useMemo(() => {
    const exp = project?.description.split("\n");
    return exp?.map((e) => {
      return (
        <li
          className={styles.list}
          key={e}
          dangerouslySetInnerHTML={{ __html: e }}
        />
      );
    });
  }, [project]);

  return (
    <div className={styles.cardItemContainer}>
      <SvgImageContainer
        className={styles.imageContainer}
        data={`/images/${theme}/${project?.image as string}`}
        svgAlt={project?.project}
      />
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{project?.project}</p>
          <div className={styles.linksContainer}>
            <IconItem
              href={project?.demo}
              data="vector_link.svg"
              alt={`${project?.project} project link`}
            />
            <IconItem
              href={project?.github}
              data="vector_github.svg"
              alt={`${project?.project} project link`}
            />
          </div>
        </div>
        <div className={styles.description}>
          <ul className={styles.unOrderList}>{listBullets}</ul>
        </div>
        <p className={styles.techStack}>
          {project?.stack?.join("\xa0\xa0-\xa0\xa0")}
        </p>
      </div>
    </div>
  );
});

export default CardItem;
