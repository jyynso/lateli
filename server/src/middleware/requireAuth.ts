import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated"});
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string};
    (req as any).userId = payload.userId;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}