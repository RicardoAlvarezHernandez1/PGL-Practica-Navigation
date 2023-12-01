import React from "react";
import { LoggedContext, LoggedContextType } from "../context/LoggedContext";
import { UserContext, UserContextType } from "../context/UserContext";

type UserProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const UserProvider = (props: UserProviderProps) => {
  const { children } = props;

  const [user, setuser] = React.useState("");

  const setUserName = (username: string) => setuser(username);

  const defaultValue: UserContextType = {
    user,
    setUserName,
  };

  return (
    <UserContext.Provider value={defaultValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
