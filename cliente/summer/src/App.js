import React, { useState } from "react";
import SignInSignUp from "./page/SignInSignUp";

export default function App() {
  const [user, setUser] = useState({ name: "carlos" });

  return (
    <div>
      {user ? (
          <SignInSignUp />
      ) : (
        <h1>No estas logeado</h1>
      )}
    </div>
  );
}
