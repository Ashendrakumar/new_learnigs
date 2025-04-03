"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import React from "react";

const routeLinks = [
  { href: "/login", label: "Login" },
  { href: "/resister", label: "Register" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const [search, setSearch] = React.useState("Maintain state in layout");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/3 p-5 border-2 border-gray-300 rounded-lg">
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <nav className="flex justify-between mb-4">
          {routeLinks.map(({ href, label }) => {
            const isActive = pathName.startsWith(href);
            return isActive ? (
              <Link
                key={href}
                href={href}
                className="text-red-500 ashendra-active"
              >
                {label}
              </Link>
            ) : (
              <Link key={href} href={href}>
                {label}
              </Link>
            );
          })}
        </nav>
        <h1 className="text-3xl font-bold mb-4">Auth Layout</h1>
        {children}
      </div>
    </div>
  );
}
