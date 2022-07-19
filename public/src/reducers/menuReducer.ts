import { reducerActionType } from '../types/reducerActionType';

export type MenuType = {
    status: boolean;
}

export const menuInitialState: MenuType = {
    status: true,
}

export const menuReducer = (state: MenuType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_MENU':
            return {...state, status: action.payload.status};
            break;
    }

    return state;
}