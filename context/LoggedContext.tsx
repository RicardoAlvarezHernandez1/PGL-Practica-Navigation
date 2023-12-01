import React from "react";

type LoggedContextType = {
  isLogged: boolean;
  toggleIsLogged: Function;
};

const LoggedContext = React.createContext({} as LoggedContextType);

export { LoggedContext, LoggedContextType };
