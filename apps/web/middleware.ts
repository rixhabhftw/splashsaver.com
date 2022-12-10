import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  // Implement the auth logic here
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/user",
};
