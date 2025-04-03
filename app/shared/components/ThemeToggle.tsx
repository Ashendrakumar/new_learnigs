"use client";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "../providers/ThemeProvider";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <ThemeProvider>
          <button onClick={toggleTheme} className="rounded-full transition-all">
            {theme === "dark" ? <>🌞</> : <>🌙</>}
          </button>
        </ThemeProvider>
      )}
    </>
  );
}
