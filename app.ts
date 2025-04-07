import express from 'express';
import productRoutes from './productRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
