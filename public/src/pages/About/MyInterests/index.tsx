import { useContext } from "react";
import * as C from "./styles";


import { Context } from "../../../contexts/Contexts";
import { pageData } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";
import { CardTech } from "../../../components/CardTech";

export const MyInterests = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const myInterests: any = pageData.about.myInterests.tech;

  return (
    <C.MyInterests>
      <SubTitle subTitle={pageData.about.myInterests.title[lang]}/>

      <div className="container-card">
        {myInterests.map((tech: any) => (
          <CardTech
            key={tech.id}
            src={theme.mode.status === "dark"
                ? tech.img.light
                : tech.img.dark
            }
            srcHover={tech.img.primary}
            alt={tech.img.alt[lang]}
            tech={tech.name}
          />
        ))}
      </div>
    </C.MyInterests>
  );
};
