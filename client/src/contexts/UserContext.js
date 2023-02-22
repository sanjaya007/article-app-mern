import { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [profile, setProfile] = useState("loading");
  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
