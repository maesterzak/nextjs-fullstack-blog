import { createContext, useReducer } from "react";

export const storeContext = createContext();

const initialState = {

  isAdmin: false
};

function reducer(state, action) {
  const payload = action.payload;
  switch (action.type) {

    case "SET_ADMIN": {
      return { ...state, isAdmin: true }
    }
    ///ddddg
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
}
