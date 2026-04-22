const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Routes
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'user-service' });
});

app.listen(PORT, () => {
  console.log(`user-service running on port ${PORT}`);
});
