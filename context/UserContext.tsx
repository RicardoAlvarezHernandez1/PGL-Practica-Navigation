import React from "react";

type UserContextType = {
  user: string;
  setUserName: Function;
};

const UserContext = React.createContext({} as UserContextType);

export { UserContext, UserContextType };
