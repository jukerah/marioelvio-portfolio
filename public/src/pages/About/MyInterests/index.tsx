import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";
import { CardTech } from "../../../components/CardTech";
import { TechnologyListType } from "../../../types/TechnologyListType";

export const MyInterests = () => {
  const { theme } = useContext(Context);
  const myInterests: TechnologyListType[] = pageInfo.about.myInterests.tech;

  return (
    <C.MyInterests>
      <SubTitle subTitle={pageInfo.about.myInterests.title}/>

      <div className="container-card">
        {myInterests.map((tech: TechnologyListType) => (
          <CardTech
            key={tech.id}
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
    </C.MyInterests>
  );
};
