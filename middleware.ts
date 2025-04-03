import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log("middleware");
//   debugger;
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect("/", request.url as ResponseInit);
//   }
// }

// export const config = {
//   matcher: "/profile",
// };

export function middleware(request: NextRequest) {
  console.log("middleware");
  const token = request.headers.get("authorization");
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login"], // Apply only to dashboard routes
};
