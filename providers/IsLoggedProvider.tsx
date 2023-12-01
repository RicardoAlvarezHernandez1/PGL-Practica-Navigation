import React from "react";
import { LoggedContext, LoggedContextType } from "../context/LoggedContext";

type IsLoggedProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const IsLoggedProvider = (props: IsLoggedProviderProps) => {
  const { children } = props;

  const [isLogged, setisLogged] = React.useState(false);

  const toggleIsLogged = () => setisLogged(true);

  const defaultValue: LoggedContextType = {
    isLogged,
    toggleIsLogged,
  };

  return (
    <LoggedContext.Provider value={defaultValue}>
      {children}
    </LoggedContext.Provider>
  );
};

export default IsLoggedProvider;
