import { createContext, useReducer } from 'react';
import { MenuType, menuInitialState, menuReducer } from '../reducers/menuReducer';
import { ModeType, modeInitialState, modeReducer } from '../reducers/modeReducer'
import { SoftSkillInitialState, SoftSkillType, softSkillReducer } from '../reducers/softSkillReducer';
import { reducerActionType } from '../types/reducerActionType';

type initialStateType = {
    isMenuOpen: MenuType;
    mode: ModeType;
    showSoftSkill: SoftSkillType;
}

type ContextType = {
    theme: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    isMenuOpen: menuInitialState,
    mode: modeInitialState,
    showSoftSkill: SoftSkillInitialState
}

export const Context = createContext<ContextType>({
    theme: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    isMenuOpen: menuReducer(state.isMenuOpen, action),
    mode: modeReducer(state.mode, action),
    showSoftSkill: softSkillReducer(state.showSoftSkill, action)
});

type ContextProviderProps = {
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [theme, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ theme, dispatch }}>
            {children}
        </Context.Provider>
    );
}