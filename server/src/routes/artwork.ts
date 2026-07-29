import { Router } from 'express';
import { upload } from '../middleware/upload';
import { uploadArtwork } from '../services/storageService';
import { prisma } from '../lib/prisma';
import { requireAuth } from '../middleware/requireAuth';

const router = Router();

router.post('/artworks', requireAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided'});
    }

    const imageUrl = await uploadArtwork(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype
    );
    
    const artwork = await prisma.artwork.create({
      data: {
        name: req.body.name,
        artist: req.body.artist,
        description: req.body.description,
        medium: req.body.medium,
        price: parseFloat(req.body.price),
        imageUrl,
        userId: (req as any).userId,
      },
    });

    res.status(201).json(artwork);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create artwork'});
  }
});

export default router;