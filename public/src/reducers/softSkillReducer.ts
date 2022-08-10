import { reducerActionType } from '../types/reducerActionType';

export type SoftSkillType = {
    status: number;
}

export const SoftSkillInitialState: SoftSkillType = {
    status: 0
}

export const softSkillReducer = (state: SoftSkillType, action: reducerActionType) => {
    if (action.type === 'CHANGE_SOFTSKILL') {
        return {...state, status: action.payload.status};
    }

    return state;
}