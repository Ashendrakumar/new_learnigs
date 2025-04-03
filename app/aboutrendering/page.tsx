"use client"; // This page will be executed on the client side
import React from "react";

export default function AboutRendering() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <h1 className="text-4xl font-bold mb-4">About Rendering</h1>
      <p>
        {count}
        Rendering is the process of generating a user interface from a
        description of the UI, like HTML, CSS, and JavaScript. Next.js supports
        two types of rendering: Server-side Rendering (SSR) and Client-side
        Rendering (CSR).
      </p>
      <ul className="list-disc pl-10">
        <li>
          Server-side Rendering (SSR): The server generates the initial HTML of
          the web page. The client receives the HTML and renders it.
        </li>
        <li>
          Client-side Rendering (CSR): The client generates the initial HTML of
          the web page. The server sends only the data needed.
        </li>
        <li></li>
      </ul>
    </div>
  );
}
