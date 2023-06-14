import React, { createContext, useState, ReactNode } from "react";
import { ContextProviderProps, Difficulty, IContextType } from "../types/Types";

const Context = createContext<IContextType>({} as IContextType);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [difficulty, setDifficulty] = useState(Difficulty.EASY);
  const [start, setStart] = useState(false);

  const contextValue: IContextType = {
    difficulty,
    setDifficulty,
    start,
    setStart,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
