import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(undefined);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentProfile, setCurrentProfile] = useState(undefined);
  const [profiles, setProfiles] = useState([]);
  const [searchString, setSearchString] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        screenSize,
        setScreenSize,
        currentProfile,
        setCurrentProfile,
        profiles,
        setProfiles,
        searchString,
        setSearchString,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

