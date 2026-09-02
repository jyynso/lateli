import { Router } from "express";
import { PrismaClient } from "../generated/prisma/client";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();
const prisma = new PrismaClient();

router.post('/orders', requireAuth, async (req, res) => {
  const { artworkId } = req.body;
  const userId = req.userId;

  if (!artworkId) {
    return res.status(400).json({ error: 'artworkId is required' });
  }

  try {
    const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
    
    if (!artwork) {
      return res.status(404).json({ error: 'Artwork not found' });
    }

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized'})
    }

    const order = await prisma.order.create({
      data: {
        buyerId: userId,
        items: {
          create: {
            artworkId: artwork.id,
            price: artwork.price,
          },
        },
      },
      include: { items: true },
    });
    res.status(201).json(order);
    
  } catch(err: any) { 
    //prisma unique artwork constraints
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'This artwork has already been sold' });
    }
    console.error(err);
    res.status(500).json({ error: 'Checkout failed' });
  }
});

export default router;