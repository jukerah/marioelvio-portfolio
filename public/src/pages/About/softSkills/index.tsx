import { useContext } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageData";
import { SoftSkillType } from "../../../types/SoftSkillType";

import { SubTitle } from "../../../components/SubTitle";
import { CardSkill } from "./CardSkill";

export const SoftSkills = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();

  return (
    <C.ContainerSoftSkills mode={theme.mode.status}>
      <SubTitle subTitle={pageInfo.about.softSkills.title[ i18n.language as keyof typeof pageInfo.about.softSkills.title ]} />

      <p className="description-skills">
        {pageInfo.about.softSkills.description[ i18n.language as keyof typeof pageInfo.about.softSkills.description ]}
      </p>

      <C.SoftSkills mode={theme.mode.status}>
        <C.ContainerCard>
          {pageInfo.about.softSkills.skill.map((softskill: SoftSkillType, index) => index < 5 && (                
            <CardSkill
              id={softskill.id}
              name={softskill.name[ i18n.language as keyof typeof softskill.name ]}
              description={softskill.description[ i18n.language as keyof typeof softskill.description ]}
            />
          ))}
        </C.ContainerCard>
        <C.ContainerCard>
          {pageInfo.about.softSkills.skill.map((softskill: SoftSkillType, index) => index >= 5 && (                
            <CardSkill
              id={softskill.id}
              name={softskill.name[ i18n.language as keyof typeof softskill.name ]}
              description={softskill.description[ i18n.language as keyof typeof softskill.description ]}
            />
          ))}
        </C.ContainerCard>
      </C.SoftSkills>
    </C.ContainerSoftSkills>
  );
};
