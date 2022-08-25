import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageData } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";
import { CardSkill } from "./CardSkill";

export const SoftSkills = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  return (
    <C.ContainerSoftSkills mode={theme.mode.status}>
      <SubTitle subTitle={pageData.about.softSkills.title[lang]} />

      <p className="description-skills">
        {pageData.about.softSkills.description[lang]}
      </p>

      <C.SoftSkills mode={theme.mode.status}>
        <C.ContainerCard>
          {pageData.about.softSkills.skill.map((softskill: any, index: number) => index < 5 && (                
            <CardSkill
              key={index}
              id={softskill.id}
              name={softskill.name[lang]}
              description={softskill.description[lang]}
            />
          ))}
        </C.ContainerCard>
        <C.ContainerCard>
          {pageData.about.softSkills.skill.map((softskill: any, index: number) => index >= 5 && (                
            <CardSkill
              key={index}
              id={softskill.id}
              name={softskill.name[lang]}
              description={softskill.description[lang]}
            />
          ))}
        </C.ContainerCard>
      </C.SoftSkills>
    </C.ContainerSoftSkills>
  );
};
