import { createContext, useContext, useState } from "react";

export const signupContext = createContext();

const SignupProvider = ({ children }) => {
  const [logedinUser, setLoggedinUser] = useState("");
  return (
    <signupContext.Provider value={{ logedinUser, setLoggedinUser }}>
      {children}
    </signupContext.Provider>
  );
};

export const useSignUp = () => {
    return useContext(signupContext);
}

export default SignupProvider;