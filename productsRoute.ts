import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/products', async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
});

export default router;
