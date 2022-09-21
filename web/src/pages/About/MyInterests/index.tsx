import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageInfo";

import { SubTitle } from "../../../components/SubTitle";
import { CardTech } from "../../../components/CardTech";
import { TechnologyType } from "../../../types/TechnologyType";

export const MyInterests = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const myInterests = {
    title: pageInfo.about.myInterests.title[ lang as keyof typeof pageInfo.about.myInterests.title ],
    list: pageInfo.about.myInterests.tech
  }

  return (
    <C.MyInterests>
      <SubTitle subTitle={myInterests.title}/>

      <div className="container-card">
        {myInterests.list.map((tech: TechnologyType) => (
          <CardTech
            key={tech.id}
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
    </C.MyInterests>
  );
};
