"use client";

import Link from "next/link";

export default function ArchivePage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Archive Dashboard</h1>
      <p>
        This is a protected page. You can only access this page if you are
        logged in.
        <Link href="/dashboard">dashboard</Link>
      </p>
    </div>
  );
}
