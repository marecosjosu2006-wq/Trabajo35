import cors from 'cors';
import express from 'express';
import allRoutes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} (${req.path})  URL: ${req.url}  - HEADERS ${JSON.stringify(req.headers)} - BODY ${JSON.stringify(req.body)}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

allRoutes(app);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error('Error:', err);
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ success: false, error: message });
});
export default app;