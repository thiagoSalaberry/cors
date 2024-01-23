import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET(req: Request, res: NextApiResponse) {
  const origin = req.headers.get("origin");
  const user = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return new Response(JSON.stringify(user), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
export async function POST(req: Request, res: NextApiResponse) {
  const origin = req.headers.get("origin");
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const user = await response.json();
  return new Response(JSON.stringify(user), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
