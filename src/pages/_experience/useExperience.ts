import * as React from "react";
import { Experience } from "../../data/types";

export default function useExperience(experiences: Array<Experience>) {
  const [experience, setExperience] = React.useState<Experience>();

  React.useEffect(() => {
    setExperience(experiences[0]);
  }, [setExperience, experiences]);

  const onExperienceClick = React.useCallback(
    (value: Experience) => {
      setExperience(value);
    },
    [setExperience]
  );

  return {
    experience,
    onExperienceClick,
  };
}
