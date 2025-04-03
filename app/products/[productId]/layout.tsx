import React from "react";
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Product Layout</p>
      {children}
    </>
  );
}
