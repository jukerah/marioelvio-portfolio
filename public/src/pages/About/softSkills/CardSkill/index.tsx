import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { svgs } from "../../../../data/SvgList";

interface Props {
  id: number;
  name: string;
  description: string;
}

export const CardSkill = (props: Props) => {
  const { theme, dispatch } = useContext(Context);

  const handleClickQuestion = (index: number) => {
    if (index === theme.showSoftSkill.status) {
      dispatch({
        type: "CHANGE_SOFTSKILL",
        payload: {
          status: 0,
        },
      });
    } else {
      dispatch({
        type: "CHANGE_SOFTSKILL",
        payload: {
          status: index,
        },
      });
    }
  };

  const showStatus = (skillId: number) => {
    return theme.showSoftSkill.status === skillId ? true : false;
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
