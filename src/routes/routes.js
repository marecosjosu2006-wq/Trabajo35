import { Router } from 'express';
import productRoutes from './producto.routes.js';
import userRoutes from './user.routes.js';

const allRoutes = Router();

allRoutes.use("/products", productRoutes);

allRoutes.use("/users", userRoutes);


export default allRoutes;   