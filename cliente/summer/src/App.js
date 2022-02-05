import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div>{user ? <h1>Estas logeado</h1> : <h1>No estas logeado</h1>}</div>
  )
}
