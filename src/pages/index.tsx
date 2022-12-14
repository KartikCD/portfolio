import * as React from "react";
import type { GetStaticProps } from "next";
import path from "path";
import fsPromises from "fs/promises";
import Objective from "./_objective/Objective";
import { Experiences, FeaturedProjects } from "../data/types";
import Experience from "./_experience/Experience";
import Projects from "./_projects/Projects";

interface Props {
  exp: Experiences;
  proj: FeaturedProjects;
}

const Home: React.FC<Props> = React.memo(({ exp, proj }) => {
  return (
    <>
      <Objective />
      <Experience experiences={exp.experiences} />
      <Projects featuredProjects={proj.projects} />
    </>
  );
});

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "/src/data/experiences.json");
  const projectPath = path.join(process.cwd(), "/src/data/projects.json");
  const jsonData = await fsPromises.readFile(filePath);
  const projectData = await fsPromises.readFile(projectPath);
  const objectData = JSON.parse(jsonData as unknown as string);
  const projects = JSON.parse(projectData as unknown as string);
  return {
    props: {
      exp: objectData as Experiences,
      proj: projects as FeaturedProjects,
    },
  };
};

export default Home;
