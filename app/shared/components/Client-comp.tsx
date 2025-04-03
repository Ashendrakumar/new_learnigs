"use client";
import React from "react";
import ServerComp from "./Server-comp";

interface ClientCompProps {
  children?: React.ReactNode;
}

const ClientComp: React.FC<ClientCompProps> = ({ children }) => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Client Component</h1>
      <p>This is a client-side rendered component.</p>
      {/* <ServerComp /> */}
      {children && <>{children}</>}
    </div>
  );
};

export default ClientComp;
