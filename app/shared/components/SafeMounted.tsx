"use client";
import { useEffect, useState } from "react";

interface SafeMountedProps {
  children: React.ReactNode;
}

const SafeMounted: React.FC<SafeMountedProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

export default SafeMounted;
