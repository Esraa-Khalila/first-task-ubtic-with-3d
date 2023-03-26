import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const ContextProvider = (props) => {
    const [cloth, setCloth] = useState(1);
  
    return (
      <Context.Provider
        value={{
          cloth,
          setCloth,
        }}
      >
        {props.children}
      </Context.Provider>
    );
  };
  
  export const useCustomization = () => {
    const context = useContext(Context);
    return context;
  };
  