import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { svgs } from "../../../../data/SvgList";

interface Props {
  id: number;
  name: string;
  description: string;
}

export const CardSkill = (props: Props) => {
  const { theme } = useContext(Context);
  const [ showSoftSkill, setShowSoftSkill ] = useState<number>(0);

  const handleClickQuestion = (index: number) => {
    if (index === showSoftSkill) {
      setShowSoftSkill(0);
    } else {
      setShowSoftSkill(index);
    }
  };

  const showStatus = (skillId: number) => {
    return showSoftSkill === skillId ? true : false;
  };

  return (
    <C.Card>
      <C.SkillName
        mode={theme.mode.status}
        onClick={() => handleClickQuestion(props.id)}
        show={showStatus(props.id)}
      >
        <h3>{props.name}</h3>
        {svgs.systemIcon.chevronDown}
      </C.SkillName>
      <C.ContainerSkillDescription mode={theme.mode.status}>
        <C.SkillDescription
          mode={theme.mode.status}
          show={showStatus(props.id)}
        >
          {props.description}
        </C.SkillDescription>
      </C.ContainerSkillDescription>
    </C.Card>
  );
};
