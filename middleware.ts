import { NextResponse } from "next/server";
const allowedOrigin =
  process.env.NODE_ENV === "production"
    ? []
    : ["http://localhost:3000", "https://www.google.com"];

export async function middleware(req: Request) {
  const origin = req.headers.get("origin");
  if (origin && !allowedOrigin.includes(origin) /* || !origin*/) {
    return new NextResponse("Prohibido", {
      status: 403,
      statusText: "Forbidden",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  return NextResponse.next();
}

// export const config = {
//   matcher: "/api/:path*",
// };
