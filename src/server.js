import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

const Port = env.PORT;
connectDB();

const PORT = env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});