import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";
import { CardSkill } from "./CardSkill";

export const SoftSkills = () => {
  const { theme } = useContext(Context);

  return (
    <C.ContainerSoftSkills mode={theme.mode.status}>
      <SubTitle subTitle={"Soft skills"} />

      <p className="description-skills">
        {pageInfo.about.softSkills.description}
      </p>

      <C.SoftSkills mode={theme.mode.status}>
        <C.ContainerCard>
          <CardSkill
            id={pageInfo.about.softSkills.skill[0].id}
            name={pageInfo.about.softSkills.skill[0].name}
            description={pageInfo.about.softSkills.skill[0].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[1].id}
            name={pageInfo.about.softSkills.skill[1].name}
            description={pageInfo.about.softSkills.skill[1].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[2].id}
            name={pageInfo.about.softSkills.skill[2].name}
            description={pageInfo.about.softSkills.skill[2].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[3].id}
            name={pageInfo.about.softSkills.skill[3].name}
            description={pageInfo.about.softSkills.skill[3].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[4].id}
            name={pageInfo.about.softSkills.skill[4].name}
            description={pageInfo.about.softSkills.skill[4].description}
          />
        </C.ContainerCard>
        <C.ContainerCard>
          <CardSkill
            id={pageInfo.about.softSkills.skill[5].id}
            name={pageInfo.about.softSkills.skill[5].name}
            description={pageInfo.about.softSkills.skill[5].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[6].id}
            name={pageInfo.about.softSkills.skill[6].name}
            description={pageInfo.about.softSkills.skill[6].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[7].id}
            name={pageInfo.about.softSkills.skill[7].name}
            description={pageInfo.about.softSkills.skill[7].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[8].id}
            name={pageInfo.about.softSkills.skill[8].name}
            description={pageInfo.about.softSkills.skill[8].description}
          />
          <CardSkill
            id={pageInfo.about.softSkills.skill[9].id}
            name={pageInfo.about.softSkills.skill[9].name}
            description={pageInfo.about.softSkills.skill[9].description}
          />
        </C.ContainerCard>
      </C.SoftSkills>
    </C.ContainerSoftSkills>
  );
};
