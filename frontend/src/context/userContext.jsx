import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext();

export const userCurrentContext = () => useContext(CurrentUserContext);

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState(JSON.parse(localStorage.getItem("name")));
  const [userEmail, setUserEmail] = useState(
    JSON.parse(localStorage.getItem("email"))
  );
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  return (
    <CurrentUserContext.Provider
      value={{
        name,
        setName,
        userEmail,
        setUserEmail,
        userId,
        setUserId,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

// UserContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
