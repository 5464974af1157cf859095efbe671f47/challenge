const express = require('express');
const router = express.Router();

const users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }
  
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
});

router.get('/list', (req, res) => {
  res.json(users.map(u => ({ username: u.username })));
});

module.exports = router;
