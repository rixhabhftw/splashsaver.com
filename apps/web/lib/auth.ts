import prisma from "@splashsaver/prisma";
import { User } from "../types/user";
import jwt from "jsonwebtoken";

/*
  This probably isn't the best way of running authentication logic
  but it's not possible to use packages like jwt or prisma because
  they interact with the node API and next.js's middleware api is
  quite limited so we aren't able to use them.
 */
export const auth = async (token: string) => {
  if (!token) {
    return {
      success: false,
      status: 400,
      error: {
        message: "Please provide the authorization token.",
      },
    };
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET!) as User;

  if (!payload) {
    return {
      success: false,
      status: 400,
      error: {
        message: "Invalid token was provided.",
      },
    };
  }

  const username = payload.username;

  try {
    const user = await prisma?.user.findUnique({
      where: { username: username as string },
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
      return {
        success: false,
        status: 400,
        error: {
          message: "This user doesn't exist.",
        },
      };
    }
  } catch (e) {
    console.log(e);

    return {
      success: false,
      status: 500,
      error: {
        message: "Something went wrong",
      },
    };
  }
};
