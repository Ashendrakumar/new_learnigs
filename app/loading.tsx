"use client";

import React from "react";

export default function LoadingPage() {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <div className="animate-spin rounded-full h-32 w-32 border-t-amber-200 border-b-blue-500  border-t-3 border-b-3"></div>
      loading ....
    </div>
  );
}
