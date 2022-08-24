import { useContext } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { svgs } from "../../../data/SvgList";
import { pageInfo } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";
import { ContainerSkill } from "./ContainerSkill";

export const HardSkills = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();

  const countFrontEnd: number = pageInfo.about.hardSkills.frontEnd.skill.length;
  const countBackEnd: number = pageInfo.about.hardSkills.backEnd.skill.length;
  const countMobile: number = pageInfo.about.hardSkills.mobile.skill.length;
  const countTools: number = pageInfo.about.hardSkills.tools.skill.length;
  const countDatabase: number = pageInfo.about.hardSkills.database.skill.length;

  return (
    <C.ContainerHardSkills mode={theme.mode.status}>
      <SubTitle subTitle={pageInfo.about.hardSkills.title[ i18n.language as keyof typeof pageInfo.about.hardSkills.title ]} />

      <p className="description-skills">
        {pageInfo.about.hardSkills.description[ i18n.language as keyof typeof pageInfo.about.hardSkills.description ]}
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
            stack={pageInfo.about.hardSkills.tools.name[ i18n.language as keyof typeof pageInfo.about.hardSkills.tools.name ]}
            skillList={pageInfo.about.hardSkills.tools.skill}
            svg={svgs.systemIcon.tools}
          />
        )}

        {countDatabase > 0 && (
          <ContainerSkill
            stack={pageInfo.about.hardSkills.database.name[ i18n.language as keyof typeof pageInfo.about.hardSkills.database.name ]}
            skillList={pageInfo.about.hardSkills.database.skill}
            svg={svgs.systemIcon.database}
          />
        )}
      </C.HardSkills>
    </C.ContainerHardSkills>
  );
};
