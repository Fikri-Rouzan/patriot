import { createContext, useContext } from "react";

export const Store = createContext();

export const useQuizContext = () => useContext(Store);
