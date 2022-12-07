import { NextRequest, NextResponse } from "next/server";

export const auth = () => {
  return async (req: NextRequest, res: NextResponse) => {
    const token = req.headers.values;
  };
};
