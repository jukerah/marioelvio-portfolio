import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { CardTech } from "../../../../components/CardTech";
import { TechnologyListType } from "../../../../types/TechnologyListType";

interface Props {
  stack: string;
  skillList: TechnologyListType[];
  svg: React.ReactNode;
}

export const ContainerSkill = (props: Props) => {
  const { theme } = useContext(Context);

  return (
    <C.ContainerSkill>
      <C.TitleStack mode={theme.mode.status}>
        {props.svg}
        <h3>{props.stack}</h3>
      </C.TitleStack>

      <div className="container-card">
        {props.skillList.map((tech: any, index: number) => (
          <CardTech
            key={index}
            src={theme.mode.status === "dark"
              ? tech.img.light
              : tech.img.dark
            }
            srcHover={tech.img.primary}
            alt={tech.img.alt}
            tech={tech.name}
          />
        ))}
      </div>
    </C.ContainerSkill>
  );
};
