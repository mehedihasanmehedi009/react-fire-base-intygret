import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth.init";
import { AuthContext } from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  
    // registar
 const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }

const Singin = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}
onAuthStateChanged(auth,(corruntuser)=>{
 if(corruntuser){
 console.log(corruntuser)
 }
 else{
   console.log(corruntuser)
 }
})

 const Man = {
    createUser,
    Singin
 }

  return <AuthContext value={Man}>{children}</AuthContext>;
};

export default AuthProvider;
