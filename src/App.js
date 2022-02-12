import React, { useState, useEffect } from "react";
import SignInSignUp from "./page/SignInSignUp";
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../src/utils/contexts'

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser();
  
    return () => {
      //
    }
  }, [])
  

  return (
    <AuthContext.Provider value={user}>
      {user ? (<h1>No estas logeado</h1>) : (<SignInSignUp />)}
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
