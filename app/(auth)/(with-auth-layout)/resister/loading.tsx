"use client";

import React from "react";

export default function LoadingPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/3 p-5 border-2 border-gray-300 rounded-lg">
        <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-1/2 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-1/2 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-1/2 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-1/2 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
      </div>
      {"Loading..."}
    </div>
  );
}
