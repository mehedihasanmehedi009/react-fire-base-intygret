import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth.init";
import { AuthContext } from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
 
 const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const Man = {
    createUser
 }

  return <AuthContext value={Man}>{children}</AuthContext>;
};

export default AuthProvider;
