import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { svgs } from "../../../data/SvgList";
import { pageData } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";
import { ContainerSkill } from "./ContainerSkill";

export const HardSkills = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const countFrontEnd: number = pageData.about.hardSkills.frontEnd.skill.length;
  const countBackEnd: number = pageData.about.hardSkills.backEnd.skill.length;
  const countMobile: number = pageData.about.hardSkills.mobile.skill.length;
  const countTools: number = pageData.about.hardSkills.tools.skill.length;
  const countDatabase: number = pageData.about.hardSkills.database.skill.length;

  return (
    <C.ContainerHardSkills mode={theme.mode.status}>
      <SubTitle subTitle={pageData.about.hardSkills.title[lang]} />

      <p className="description-skills">
        {pageData.about.hardSkills.description[lang]}
      </p>

      <C.HardSkills>
        {countFrontEnd > 0 && (
          <ContainerSkill
            stack={"Front-end"}
            skillList={pageData.about.hardSkills.frontEnd.skill}
            svg={svgs.systemIcon.frontend}
          />
        )}

        {countBackEnd > 0 && (
          <ContainerSkill
            stack={"Back-end"}
            skillList={pageData.about.hardSkills.backEnd.skill}
            svg={svgs.systemIcon.backend}
          />
        )}

        {countMobile > 0 && (
          <ContainerSkill
            stack={"Mobile"}
            skillList={pageData.about.hardSkills.mobile.skill}
            svg={svgs.systemIcon.mobile}
          />
        )}

        {countTools > 0 && (
          <ContainerSkill
            stack={pageData.about.hardSkills.tools.name[lang]}
            skillList={pageData.about.hardSkills.tools.skill}
            svg={svgs.systemIcon.tools}
          />
        )}

        {countDatabase > 0 && (
          <ContainerSkill
            stack={pageData.about.hardSkills.database.name[lang]}
            skillList={pageData.about.hardSkills.database.skill}
            svg={svgs.systemIcon.database}
          />
        )}
      </C.HardSkills>
    </C.ContainerHardSkills>
  );
};
