import React, { useState, useEffect } from "react";
import SignInSignUp from "./page/SignInSignUp";
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../src/utils/contexts'
import { isUserLogedApi } from "../src/api/auth"
import Routing from "./routes/Routing";


export default function App() {
  const [user, setUser] = useState(null);
  const [loadUser, setloadUser] = useState(false);
  const [refreshCheckLogin, setrefreshCheckLogin] = useState(false)

  useEffect(() => {
    setUser(isUserLogedApi())
    setrefreshCheckLogin(false)
    setloadUser(true)
    //console.log(isUserLogedApi())
  }, [refreshCheckLogin])

  //comentario
  return (
    <AuthContext.Provider value={user}>
      {user ? (<Routing />) : (<SignInSignUp setrefreshCheckLogin={setrefreshCheckLogin}/>)}      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}
