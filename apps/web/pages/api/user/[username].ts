import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../lib/auth";
import prisma from "@splashsaver/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const authenticated = await auth(token as string);

    if (authenticated?.success === false) {
      return res.status(authenticated.status).json({
        success: authenticated.success,
        error: {
          message: authenticated.error.message,
        },
      });
    }
  } catch (e) {
    return res.status(500).send({
      success: false,
      error: {
        message: "Invalid token was provided.",
      },
    });
  }

  if (req.method === "GET") {
    const username = req.query.username;

    if (!username) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Please provide the username",
        },
      });
    }

    try {
      const user = await prisma.user.findUnique({
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

      if (user) {
        return res.status(200).json({ success: true, user });
      } else {
        return res.status(500).json({
          success: false,
          error: {
            message: "This user doesn't exist.",
          },
        });
      }
    } catch (e) {
      return res.status(500).send({
        success: false,
        error: {
          message: "Something went wrong.",
        },
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      method: req.method,
      error: {
        message: `${req.method} requests are not allowed.`,
      },
    });
  }
}
