"use client";

export default function DashboardLayout({
  children,
  revenue,
  users,
  login,
}: Readonly<{
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}>) {
  const isLoggedIn = false;
  const loggedInTsx = (
    <>
      {" "}
      <div className="h-screen flex">
        <nav className="w-1/5 p-5 border-r-2 border-gray-300">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          {revenue}
          {users}
        </nav>
        <main className="w-4/5 p-5">{children}</main>
      </div>{" "}
    </>
  );
  const loggedOutTsx = (
    <>
      {" "}
      <div className="h-screen flex items-center justify-center">
        {login}
      </div>{" "}
    </>
  );
  return isLoggedIn ? loggedInTsx : loggedOutTsx;
}
