import { db } from '../firebase/config' ;


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'  

import { useState, useEffect } from 'react'
import { useStateContext } from '../context/ContextProvider';

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const { setUser, setProfiles, setCurrentProfile } = useStateContext();
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false)
  
  const auth = getAuth()
  
  //cleanup
  function checkIfIsCancelled (){
    if(cancelled){
      return;
    }
  }
  
  //register
  const createUser = async (data) => {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName
      })

      setLoading(false);

      return user
    } catch (error) {

      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage

      if(error.message.includes("Password")){
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
      } else if(error.message.includes("email-already")) {
        systemErrorMessage = "Usuário já está cadastrado."
      } else {
        systemErrorMessage = "Ocorreu um erro. Por favor, tente mais tarde."
      }
      setLoading(false)
      setError(systemErrorMessage)
    }

  }

  //logout
  const logout = () => {
    
    checkIfIsCancelled()
    signOut(auth)
    setUser(undefined);
    setCurrentProfile(undefined);
    setProfiles([]);
    localStorage.removeItem("currentProfile");
    localStorage.removeItem("profiles");
  }

  useEffect(() => {
    return () => setCancelled(true);
  }, [])

  //login 
  const login = async(data) => {
    checkIfIsCancelled()
    setLoading(true)
    setError(false)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)
    } catch(error){
      let systemErrorMessage

      if(error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado."
      } else if(error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta."
      } else {
        systemErrorMessage = "Ocorreu um erro. Por favor, tente mais tarde."
      }

      setError(systemErrorMessage)
      setLoading(false)
    }
  }

  return {
    auth,
    createUser,
    error, 
    loading,
    logout,
    login
  }
}