import * as React from "react";
import type { GetStaticProps } from "next";
import path from "path";
import fsPromises from "fs/promises";
import Objective from "./_objective/Objective";
import { Experiences } from "../data/types";
import Experience from "./_experience/Experience";

interface Props {
  exp: Experiences;
}

const Home: React.FC<Props> = React.memo(({ exp }) => {
  return (
    <div style={{ paddingBottom: "5rem" }}>
      <Objective />
      <Experience experiences={exp.experiences} />
    </div>
  );
});

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "/src/data/experiences.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData as unknown as string);
  return {
    props: {
      exp: objectData as Experiences,
    },
  };
};

export default Home;
