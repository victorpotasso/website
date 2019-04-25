import React, { useMemo, useContext } from 'react';
import { useImmer } from "use-immer";

function makeStore() {
  const context = React.createContext();

  function Provider({ initialState, children }) {
    const [state, setState] = useImmer(initialState);
    const value = useMemo(() => [state, setState], [state]);
    return <context.Provider value={value}>{children}</context.Provider>
  }

  const useStore = () => useContext(context);

  return { Provider, useStore };
}

export default makeStore;
