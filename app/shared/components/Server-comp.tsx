import "server-only";
import React from "react";
const ServerComp: React.FC = () => {
  return (
    <div>
      <h1>Server Component</h1>
      <p>This is a server-side rendered component.</p>
    </div>
  );
};

export default ServerComp;
