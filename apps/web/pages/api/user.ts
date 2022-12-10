import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).send("user");
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
