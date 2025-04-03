import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const reqHeaders = await headers(); // Get request headers
  const authorization = reqHeaders.get("authorization") ?? "No Authorization";
  const reqCookies = await cookies(); // Get request cookies
  const theme = reqCookies.get("theme") ?? "default"; // Handle null theme
  console.log("Theme:", theme);

  return new Response(
    JSON.stringify({ message: "Profile API route", theme, authorization }),
    {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "theme=dark",
        authorization,
      },
    }
  );
}
