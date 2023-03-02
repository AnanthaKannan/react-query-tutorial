import React, { createContext, useReducer, useContext, useState } from 'react';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  /**
   * Store that contains combined reducers. //
   */
  const [names, setNames] = useState('null kannan');

  return (
    <StoreContext.Provider value={{names, setNames}}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
export const useStore = () => useContext(StoreContext);
