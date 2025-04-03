export const fetchCache = "default-cache";
import React from "react";

const UsersPage: React.FC = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate it will show the loading page for 10 seconds
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
    next: { revalidate: 25 }, // Revalidate the data every 25 seconds cache will be removed
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  // const response = await fetch("http://localhost:3001/users");
  const users = await response.json();
  return (
    <>
      <h1>Users Page</h1>
      <ul>
        {users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
