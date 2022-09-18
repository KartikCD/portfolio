import * as React from "react";
import { Project } from "../../data/types";
import styles from "./Projects.module.css";
import CardItem from "./_cardItem/CardItem";

interface Props {
  featuredProjects: Array<Project>;
}

const Projects: React.FC<Props> = React.memo(({ featuredProjects }) => {
  const listItems = React.useMemo(() => {
    return featuredProjects?.map((d) => {
      const project = d as Project;
      return <CardItem project={project} key={project.id} />;
    });
  }, [featuredProjects]);

  return (
    <div className={styles.container}>
      <p className={styles.titleText}>projects</p>
      <div className={styles.gridContainer}>{listItems}</div>
      <div className={styles.emptyContainer} />
    </div>
  );
});

export default Projects;
