import { reducerActionType } from '../types/reducerActionType';

export type activePageType = {
    status: string;
}

export const activePageInitialState: activePageType = {
    status: ""
}

export const activePageReducer = (state: activePageType, action: reducerActionType) => {
    if (action.type === 'CHANGE_ACTIVE_PAGE') {
        return {...state, status: action.payload.status};
    }

    return state;
}