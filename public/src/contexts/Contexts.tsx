import { createContext, useReducer } from 'react';
import { MenuType, menuInitialState, menuReducer } from '../reducers/menuReducer';
import { ModeType, modeInitialState, modeReducer } from '../reducers/modeReducer'
import { SoftSkillInitialState, SoftSkillType, softSkillReducer } from '../reducers/softSkillReducer';
import { activePageInitialState, activePageType, activePageReducer } from '../reducers/activePageReducer';
import { reducerActionType } from '../types/reducerActionType';
import { langInitialState, langReducer, themeLangType } from '../reducers/langReducer';

type initialStateType = {
    lang: themeLangType;
    isMenuOpen: MenuType;
    mode: ModeType;
    showSoftSkill: SoftSkillType;
    activePage: activePageType;
}

type ContextType = {
    theme: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    lang: langInitialState,
    isMenuOpen: menuInitialState,
    mode: modeInitialState,
    showSoftSkill: SoftSkillInitialState,
    activePage: activePageInitialState
}

export const Context = createContext<ContextType>({
    theme: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    lang: langReducer(state.lang, action),
    isMenuOpen: menuReducer(state.isMenuOpen, action),
    mode: modeReducer(state.mode, action),
    showSoftSkill: softSkillReducer(state.showSoftSkill, action),
    activePage: activePageReducer(state.activePage, action)
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