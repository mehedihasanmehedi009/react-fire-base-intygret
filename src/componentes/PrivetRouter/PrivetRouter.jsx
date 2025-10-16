import React, { use } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivetRouter = ({children }) => {
    const {users,Loading} = use(AuthContext)
    if(Loading){
        return<span className="loading loading-bars loading-xl"></span>
    }
  if(users) {
    return children

  }
  return <Navigate to ="/Log In"></Navigate>
};

export default PrivetRouter;