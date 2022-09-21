import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageInfo";
import { svgs } from "../../../data/SvgList";

import { SubTitle } from "../../../components/SubTitle";
import { ContainerSkill } from "./ContainerSkill";

export const HardSkills = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const countFrontEnd: number = pageInfo.about.hardSkills.frontEnd.skill.length;
  const countBackEnd: number = pageInfo.about.hardSkills.backEnd.skill.length;
  const countMobile: number = pageInfo.about.hardSkills.mobile.skill.length;
  const countTools: number = pageInfo.about.hardSkills.tools.skill.length;
  const countDatabase: number = pageInfo.about.hardSkills.database.skill.length;

  const hardSkills = {
    title: pageInfo.about.hardSkills.title[ lang as keyof typeof pageInfo.about.hardSkills.title ],
    description: pageInfo.about.hardSkills.description[ lang as keyof typeof pageInfo.about.hardSkills.description ],
    tools: pageInfo.about.hardSkills.tools.name[ lang as keyof typeof pageInfo.about.hardSkills.tools.name ],
    database: pageInfo.about.hardSkills.database.name[ lang as keyof typeof pageInfo.about.hardSkills.database.name ]
  }

  return (
    <C.ContainerHardSkills mode={theme.mode.status}>
      <SubTitle subTitle={hardSkills.title} />

      <p className="description-skills">
        {hardSkills.description}
      </p>

      <C.HardSkills>
        {countFrontEnd > 0 && (
          <ContainerSkill
            stack={"Front-end"}
            skillList={pageInfo.about.hardSkills.frontEnd.skill}
            svg={svgs.systemIcon.frontend}
          />
        )}

        {countBackEnd > 0 && (
          <ContainerSkill
            stack={"Back-end"}
            skillList={pageInfo.about.hardSkills.backEnd.skill}
            svg={svgs.systemIcon.backend}
          />
        )}

        {countMobile > 0 && (
          <ContainerSkill
            stack={"Mobile"}
            skillList={pageInfo.about.hardSkills.mobile.skill}
            svg={svgs.systemIcon.mobile}
          />
        )}

        {countTools > 0 && (
          <ContainerSkill
            stack={hardSkills.tools}
            skillList={pageInfo.about.hardSkills.tools.skill}
            svg={svgs.systemIcon.tools}
          />
        )}

        {countDatabase > 0 && (
          <ContainerSkill
            stack={hardSkills.database}
            skillList={pageInfo.about.hardSkills.database.skill}
            svg={svgs.systemIcon.database}
          />
        )}
      </C.HardSkills>
    </C.ContainerHardSkills>
  );
};
