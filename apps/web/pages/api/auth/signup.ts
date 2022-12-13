import type { NextApiRequest, NextApiResponse } from "next";
import { IdentityProvider } from "@prisma/client";
import { CODES_PAGE } from "@splashsaver/lib";
import prisma from "@splashsaver/prisma";
import validator from "validator";
import jwt from "jsonwebtoken";
import Filter from "bad-words";
import * as jose from "jose";

const filter = new Filter();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    interface Body {
      name: string;
      username: string;
      avatar: string;
      provider: "SAML" | "GOOGLE" | "GITHUB";
      email: string;
      code: string;
      password?: string;
    }

    const body: Body = req.body;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Missing the request body.",
        },
      });
    }

    if (
      !body.email ||
      !body.username ||
      !body.avatar ||
      !body.provider ||
      !body.email ||
      !body.code
    ) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Please include all the required body parameters.",
        },
      });
    }

    if (!validator.isEmail(body.email.trim())) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Please provide a valid email.",
        },
      });
    }

    if (
      filter.isProfane(body.username.trim()) ||
      filter.isProfane(body.avatar.trim()) ||
      filter.isProfane(body.name.trim())
    ) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Please don't include profane words.",
        },
      });
    }

    interface BetaCodeApiResponse {
      valid: boolean;
    }

    try {
      const response = await fetch(
        `${CODES_PAGE}/api/code?code=${body.code.trim()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data: BetaCodeApiResponse = await response.json();

      if (!data.valid) {
        return res.status(400).json({
          success: false,
          error: {
            message: "Invalid beta code.",
          },
        });
      }
    } catch (err) {
      console.log(err);

      return res.status(500).send({
        success: false,
        error: {
          message: "Something went wrong.",
        },
      });
    }

    const USERNAME_MIN_LENGTH = 2;

    if (body.username.trim().length <= USERNAME_MIN_LENGTH) {
      return res.status(422).json({
        success: false,
        error: {
          message: `Username must have at least ${
            USERNAME_MIN_LENGTH + 1
          } characters.`,
        },
      });
    }

    let identityProvider;

    switch (body.provider.toUpperCase()) {
      case "GOOGLE":
        identityProvider = IdentityProvider.GOOGLE;
        break;
      case "GITHUB":
        identityProvider = IdentityProvider.GITHUB;
        break;
      default:
        identityProvider = IdentityProvider.SAML;
        break;
    }

    try {
      const existingUser = await prisma?.user.findFirst({
        where: {
          OR: [
            { email: body.email.trim().toLowerCase() },
            {
              AND: [
                { username: body.username.trim() },
                { email: { not: undefined } },
              ],
            },
          ],
        },
      });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: {
            message: "An account with this email or username already exists.",
          },
        });
      } else {
        const user = await prisma?.user.create({
          data: {
            email: body.email.trim().toLowerCase(),
            name: body.name.trim(),
            avatar: body.avatar.trim(),
            username: body.username.trim(),
            timeZone: "(GMT+0:00) Edinburgh, London",
            identityProvider,
          },
        });

        if (user) {
          const token = await new jose.SignJWT({ user })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("30d")
            .sign(new TextEncoder().encode(process.env.JWT_SECRET!));

          return res.status(201).json({ success: true, token });
        } else {
          console.log("User object: ", user);

          return res.status(500).json({
            success: false,
            error: {
              message: "Something went wrong creating the user.",
            },
          });
        }
      }
    } catch (err) {
      console.log(err);

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
