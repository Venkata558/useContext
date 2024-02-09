import React, { useState, createContext } from "react";
import CompB from "./CompB.jsx";
export const userContext = createContext();

function CompA() {
  const [user, setUser] = useState("React");
  return (
    <div className="box">
      <h1>Component A </h1>
      <h2>{`Hello, ${user}`}</h2>
      <userContext.Provider value={user}>
        <CompB user={user} />
      </userContext.Provider>
    </div>
  );
}
export default CompA;
