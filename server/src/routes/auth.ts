import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET!;

router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(409).json({ error: "Email is already in use" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, passwordHash, name },
  });

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d"});
  res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: false });
  res.status(201).json({ id: user.id, email: user.email, name: user.name });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid email"});

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: "Invalid password"});

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d"});
  res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: false });
  res.json({ id: user.id, email: user.email, name: user.name });
});

router.get("/userWho", requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: (req as any).userId },
    select: { id: true, email: true, name: true },
  });
  res.json(user);
})

export default router;