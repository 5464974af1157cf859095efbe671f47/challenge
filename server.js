const express = require('express');
const config = require('./config/config');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const { authenticateToken } = require('./middleware/auth');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Secure API' });
});

app.use('/auth', authRoutes);

app.use('/users', authenticateToken, userRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
