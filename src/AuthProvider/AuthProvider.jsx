import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../auth.init";
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [users ,setUsers]=useState(null)
    const [Loading ,setLoading]=useState(true)

  
    // registar
 const createUser = (email,password)=>{
   setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

const Singin = (email,password) =>{
   setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const sinOut = () =>{
   return signOut(auth)
}
useEffect(()=>{
  const muns = onAuthStateChanged(auth,(CurrentUser)=>{
 console.log(CurrentUser)
 setUsers(CurrentUser)
 setLoading(false)
  
})
  return ()=>{
    muns()
  }
},[])

   const Man = {
      Loading,
      users,
    createUser,
    Singin,
    sinOut
 }

  return <AuthContext value={Man}>{children}</AuthContext>;
};

export default AuthProvider;
