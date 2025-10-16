import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth.init";
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [users ,setUsers]=useState(null)
  
    // registar
 const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }

const Singin = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
  const muns=onAuthStateChanged(auth,(CurrentUser)=>{
 console.log(CurrentUser)
 setUsers(CurrentUser)
  
})
  return ()=>{
    muns()
  }
},[])

   const Man = {
      users,
    createUser,
    Singin,
 }

  return <AuthContext value={Man}>{children}</AuthContext>;
};

export default AuthProvider;
