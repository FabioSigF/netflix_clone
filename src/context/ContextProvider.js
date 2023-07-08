import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const allProfiles = [
    {
      name: "Fabio",
      avatar: "https://occ-0-3750-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd1B2sFZv59PCVFdhL-OXENKv6XIPZ0Q5XZ0v096ELca6ac_8SKNluPF5ydSf4wwn9G0AonvGNb2DtMbw3rOtK-WRcXbTzd4LpLY.png?r=2da",
      uid: "XXGGuQwe2uXR7okEbwXlh80C73H3",
      id: "7HlUpjBi8hACrfRTbLvV",
    },
    {
      name: "Felipe",
      avatar: "https://occ-0-3750-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSA3rt14XWwAt3HPPkk612DbeTp3Papj-b5weBs_3icCohx1Di5Tp2LGFiOQ1lbMUZkn85L6n9eDki_3rtSbhhOy-fGgbgl7Mya9.png?r=b7b",
      uid: "XXGGuQwe2uXR7okEbwXlh80C73H3",
      id: "nfltYmf7ZfFKXK7h352m",
    },
    {
      name: "Isabella",
      avatar: "https://occ-0-3750-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbgLiCnzTpBMIYLzMCmG7XHIvDG3IzSAzOljBgiA2pWrwKrFV4ar-H2Shmb7p2TU31Pa-ZWfsRtwzx78w6CRXgPncWA_WHsB0BV4HRF0uxI9vX52sdAWcPIpR723_1GsPTgcuFwdjv6XwUBOYcU.png?r=09c",
      uid: "XXGGuQwe2uXR7okEbwXlh80C73H3",
      id: "FmIUJMncwyVvPoR9QMdy",
    },
  ]

  const [user, setUser] = useState(undefined);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentProfile, setCurrentProfile] = useState(undefined);
  //Profiles provisório por conta do bug da collection firestore
  // const [profiles, setProfiles] = useState(allProfiles);
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

