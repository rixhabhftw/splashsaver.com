import type { NextApiRequest, NextApiResponse } from "next";
import Filter from "bad-words";

const filter = new Filter();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    interface Body {
      email: string;
      description: string;
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

    if (!body.email || !body.description) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Please include both the email and description.",
        },
      });
    }

    if (filter.isProfane(body.description.trim())) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Please don't include profane words.",
        },
      });
    }

    const CHARACTER_LIMIT = 500;

    if (body.description.trim().length > 500) {
      return res.status(400).json({
        success: false,
        error: {
          message: `The character limit is ${CHARACTER_LIMIT}`,
        },
      });
    }

    const response = await fetch(process.env.WEBHOOK_URL!, {
      method: "POST",
      body: JSON.stringify({
        embeds: [
          {
            author: {
              name: `Bug report | ${body.email}`,
            },
            description: body.description.trim(),
            fields: [],
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status >= 400) {
      return res.json({ success: false, error: "Something went wrong." });
    }

    return res.status(200).json({ success: true });
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
