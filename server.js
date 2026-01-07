const express = require('express');
const config = require('./config/config');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profile');
const { authenticateToken } = require('./middleware/auth');
const { errorHandler } = require('./utils/errorHandler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the Secure API',
    version: '1.0.0'
  });
});

app.use('/auth', authRoutes);

app.use('/users', authenticateToken, userRoutes);
app.use('/profile', authenticateToken, profileRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

module.exports = app;
