import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});


app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(productId) },
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});


app.post('/products', async (req, res) => {
  const { productTitle, productDescription, unitsLeft, pricePerUnit, isOnOffer } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        productTitle,
        productDescription,
        unitsLeft,
        pricePerUnit,
        isOnOffer,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});


app.patch('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  const { productTitle, productDescription, unitsLeft, pricePerUnit, isOnOffer } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: Number(productId) },
      data: {
        productTitle,
        productDescription,
        unitsLeft,
        pricePerUnit,
        isOnOffer,
      },
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});


app.delete('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    await prisma.product.delete({
      where: { id: Number(productId) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});


app.get('/products/on-offer', async (req, res) => {
  try {
    const productsOnOffer = await prisma.product.findMany({
      where: { isOnOffer: true },
    });
    res.json(productsOnOffer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products on offer' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
export default app;