import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(); //* création du context

//* création du hook pour utiliser le context dans les composants enfants
export const userCurrentContext = () => useContext(CurrentUserContext);

//* création du provider pour fournir le context aux composants enfants
//*children = composants enfants
export const UserContextProvider = ({ children }) => {
  //* recupere le userRole du local storage et le stocke dans le state
  const [userRole, setUserRole] = useState(
    JSON.parse(localStorage.getItem("userRole"))
  );

  return (
    //* fournit le context aux composants enfants
    <CurrentUserContext.Provider
      value={{
        userRole,
        setUserRole,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
