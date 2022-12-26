import React, { createContext,useContext,useReducer,} from "react";

//prepare the dataLayer 
export const stateContext = createContext();

// Wrap our app andprovide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>{children}</stateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () =>  useContext(stateContext);