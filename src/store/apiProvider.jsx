import React, { createContext, useMemo } from 'react';
import { apiReducer } from '../reducers/apiReducer';

const ApiStateContext = createContext({});
const ApiDispatchContext = createContext(() => {
  // Empty function
});

export const useApiState = () => {
  const context = React.useContext(ApiStateContext);
  if (context === undefined) {
    throw new Error('useApiState no puede ser usada sin un ApiProvider');
  }
  return context;
};

export const useApiDispatch = () => {
  const context = React.useContext(ApiDispatchContext);
  if (context === undefined) {
    throw new Error('useApiDispatch no puede ser usada sin un ApiProvider');
  }
  return context;
};

const ApiProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(apiReducer, {});
  const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

  return (
    <ApiStateContext.Provider value={stateValue}>
      <ApiDispatchContext.Provider value={dispatchValue}> {children} </ApiDispatchContext.Provider>
    </ApiStateContext.Provider>
  );
};

export default ApiProvider;
