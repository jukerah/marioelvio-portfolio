import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";

import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Courses } from "./Courses";
import { Certificates } from "./Certificates";

export const TimeLine = () => {
  const { theme } = useContext(Context);

  return (
    <C.TimeLine isMenuOpen={theme.isMenuOpen.status}>
      <C.ContainerLeft>
        <WorkExperience />
      </C.ContainerLeft>

      <C.CenterLine
        mode={theme.mode.status}
        isMenuOpen={theme.isMenuOpen.status}
      />

      <C.ContainerRight>
        <Education />

        <Courses />

        <Certificates />
      </C.ContainerRight>
    </C.TimeLine>
  );
};
