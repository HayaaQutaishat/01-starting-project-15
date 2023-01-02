import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const authValue = {
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
  };
  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
