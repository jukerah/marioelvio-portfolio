import { useContext } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";


import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageData";
import { TechnologyType } from "../../../types/TechnologyType";

import { SubTitle } from "../../../components/SubTitle";
import { CardTech } from "../../../components/CardTech";

export const MyInterests = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();

  const myInterests: TechnologyType[] = pageInfo.about.myInterests.tech;

  return (
    <C.MyInterests>
      <SubTitle subTitle={pageInfo.about.myInterests.title[ i18n.language as keyof typeof pageInfo.about.myInterests.title ]}/>

      <div className="container-card">
        {myInterests.map((tech: TechnologyType) => (
          <CardTech
            key={tech.id}
            src={theme.mode.status === "dark"
                ? tech.img.light
                : tech.img.dark
            }
            srcHover={tech.img.primary}
            alt={tech.img.alt[ i18n.language as keyof typeof tech.img.alt ]}
            tech={tech.name}
          />
        ))}
      </div>
    </C.MyInterests>
  );
};
