import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageInfo";

import { SubTitle } from "../../../components/SubTitle";
import { CardSkill } from "./CardSkill";
import { SoftSkillType } from "../../../types/SoftSkillType";

export const SoftSkills = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const softSkills = {
    title: pageInfo.about.softSkills.title[ lang as keyof typeof pageInfo.about.softSkills.title ],
    description: pageInfo.about.softSkills.description[ lang as keyof typeof pageInfo.about.softSkills.description ],
    list: pageInfo.about.softSkills.skill
  }

  return (
    <C.ContainerSoftSkills mode={theme.mode.status}>
      <SubTitle subTitle={softSkills.title} />

      <p className="description-skills">
        {softSkills.description}
      </p>

      <C.SoftSkills mode={theme.mode.status}>
        <C.ContainerCard>
          {softSkills.list.map((skill: SoftSkillType, index: number) => index < 5 && (                
            <CardSkill
              key={index}
              id={skill.id}
              name={skill.name[ lang as keyof typeof skill.name ]}
              description={skill.description[ lang as keyof typeof skill.description ]}
            />
          ))}
        </C.ContainerCard>
        <C.ContainerCard>
          {softSkills.list.map((skill: SoftSkillType, index: number) =>  index >= 5 && (                
              <CardSkill
              key={index}
              id={skill.id}
              name={skill.name[ lang as keyof typeof skill.name ]}
              description={skill.description[ lang as keyof typeof skill.description ]}
            />
          ))}
        </C.ContainerCard>
      </C.SoftSkills>
    </C.ContainerSoftSkills>
  );
};
