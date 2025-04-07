import express from 'express';
import productRoutes from './productRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
