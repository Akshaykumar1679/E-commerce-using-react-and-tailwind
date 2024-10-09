import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function Checkauth({isAuthenticated = true, user ,children}) {
    
    const location=useLocation();

     if (!(isAuthenticated) && !(location?.pathname?.includes("/auth/login")) || !(location?.pathname?.includes("/auth/signup")))
         {
        return <Navigate to="/auth/login" />
     }

   if (isAuthenticated && (location?.pathname?.includes("/auth/login")) || (location?.pathname?.includes("/auth/signup")))
      {
        if(user === "admin" ){
            return <Navigate to="/admin" />
        }
        else{
            return <Navigate to="/" />
        }
      }
      
  return  <>
    {children}
    </>
  
    
  
}

export default Checkauth