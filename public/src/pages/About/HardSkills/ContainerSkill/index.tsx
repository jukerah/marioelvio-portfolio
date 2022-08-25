import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { TechnologyType } from "../../../../types/TechnologyType";

import { CardTech } from "../../../../components/CardTech";

interface Props {
  stack: string;
  skillList: TechnologyType[];
  svg: React.ReactNode;
}

export const ContainerSkill = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  return (
    <C.ContainerSkill>
      <C.TitleStack mode={theme.mode.status}>
        {props.svg}
        <h3>{props.stack}</h3>
      </C.TitleStack>

      <div className="container-card">
        {props.skillList.map((tech: TechnologyType, index: number) => (
          <CardTech
            key={index}
            src={theme.mode.status === "dark"
              ? tech.img.light
              : tech.img.dark
            }
            srcHover={tech.img.primary}
            alt={tech.img.alt[ lang as keyof typeof tech.img.alt ]}
            tech={tech.name}
          />
        ))}
      </div>
    </C.ContainerSkill>
  );
};
