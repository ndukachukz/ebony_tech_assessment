import {PropsWithChildren, createContext, useContext, useReducer} from 'react';

type AppState = {
  user: {
    token: string;
  } | null;
  category: null;
};

type ReducerActions = 'set_user' | 'set_categories';

type AppAction = {
  type: ReducerActions;
  payload: Partial<AppState>;
};

type AppContextType = [AppState, React.Dispatch<AppAction>];

const appState: AppState = {
  user: null,
  category: null,
};

const AppContext = createContext<AppContextType>([appState, () => {}]);

function reducer(state: any, action: AppAction): AppState {
  switch (action.type) {
    case 'set_user': {
      // set user in async storage
      return {...state, user: {token: action.payload.user?.token}};
    }

    case 'set_categories': {
      return {...state, categories: action.payload.category};
    }

    default:
      return state;
  }
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

export default function AppProvider({children}: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, appState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
