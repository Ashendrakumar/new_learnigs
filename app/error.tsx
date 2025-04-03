"use client";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong!</h1>
      <br />
      <p>
        {error.name} {error.message}{" "}
      </p>
      <br />
      <button className="btn bg-cyan-600 text-amber-200">Try Again</button>
    </div>
  );
};

export default ErrorPage;
