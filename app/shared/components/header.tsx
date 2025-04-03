"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // If scrolled, add shadow
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseLinkClasses =
    "relative transition-all hover:text-blue-900 dark:hover:text-gray-300 group";
  return (
    <header
      className={`z-50 fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center backdrop-blur-lg  ${
        isScrolled
          ? "shadow-lg dark:bg-gray-800/50 bg-gray-50/50"
          : "dark:bg-gray-900 bg-gray-50"
      }`}
    >
      <h1 className="text-2xl font-bold">
        <Link href={"/"}>
          Learn{" "}
          <span className="dark:text-amber-100 text-amber-300 ">Quick</span>
        </Link>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/about", label: "About" },
            { href: "/aboutrendering", label: "About Rendering" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${baseLinkClasses} ${
                  pathname === href
                    ? "border-b-2 dark:border-white border-blue-900"
                    : ""
                }`}
              >
                {label}
                {pathname !== href && (
                  <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] dark:bg-white bg-blue-900 transition-all duration-400 group-hover:w-full"></span>
                )}
              </Link>
            </li>
          ))}
          <li
            className={`hover:cursor-pointer hover:scale-1.1 transition-all duration-300`}
          >
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
