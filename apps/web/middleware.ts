import { NextRequest, NextResponse } from "next/server";
import prisma from "@splashsaver/prisma";
import * as jose from "jose";

export async function middleware(req: NextRequest) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: {
          message: "Please provide the authorization token.",
        },
      })
    );
  }

  // const payload = jwt.verify(token, process.env.JWT_SECRET!) as User;
  const payload = (await jose.jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET!)
  )) as any;

  if (!payload) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: {
          message: "Invalid token.",
        },
      })
    );
  }

  console.log(payload);
  const username = payload.username as any;

  try {
    const user = await prisma?.user.findUnique({
      where: { username },
      select: {
        id: true,
        email: true,
        name: true,
        avatar: true,
        twoFactorEnabled: true,
        identityProvider: true,
        createdAt: true,
        timeZone: true,
        updatedAt: true,
        location: true,
        username: true,
        password: false,
        plan: true,
      },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: {
            message: "This user doesn't exist.",
          },
        })
      );
    }
  } catch (e) {
    console.log(e);

    return new NextResponse(
      JSON.stringify({
        success: false,
        error: {
          message: "Something went wrong.",
        },
      })
    );
  }

  NextResponse.next();
}

export const config = {
  matcher: "/api/user",
};
