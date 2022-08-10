import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';

interface Props {
    id: number;
    name: string;
    description: string;
}

export const CardSkill = (props:Props) => {
    const { theme, dispatch } = useContext(Context);

    const handleClickQuestion = (index:number) => {
        if (index === theme.showSoftSkill.status) {
            dispatch({
                type: 'CHANGE_SOFTSKILL',
                payload: {
                    status: 0
                }
            });
        } else {
            dispatch({
                type: 'CHANGE_SOFTSKILL',
                payload: {
                    status: index
                }
            });
        }
    }

    const showStatus = (skillId:number) => { return (theme.showSoftSkill.status === skillId) ? true : false; }

    return (        
        <C.Card>
            <C.SkillName
                mode={theme.mode.status}
                onClick={() => handleClickQuestion(props.id)}
                show={showStatus(props.id)}
            >
                <h3>{props.name}</h3>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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