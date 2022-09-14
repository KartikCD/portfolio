import * as React from "react";
import type { NextPage } from "next";
import Objective from "./_objective/Objective";

const Home: NextPage = React.memo(() => {
  return (
    <div>
      <Objective />
    </div>
  );
});

export default Home;
