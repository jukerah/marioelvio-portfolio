import { reducerActionType } from '../types/reducerActionType';

export type ModeType = {
    status: string;
}

export const modeInitialState: ModeType = {
    status: 'dark',
}

export const modeReducer = (state: ModeType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return {...state, status: action.payload.status};
            break;
    }

    return state;
}