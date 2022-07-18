import { createContext, useReducer } from 'react';
import { MenuType, menuInitialState, menuReducer } from '../reducers/menuReducer'
import { reducerActionType } from '../types/reducerActionType';

type initialStateType = {
    isMenuOpen: MenuType;
}

type ContextType = {
    theme: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    isMenuOpen: menuInitialState
}

export const Context = createContext<ContextType>({
    theme: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    isMenuOpen: menuReducer(state.isMenuOpen, action),
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