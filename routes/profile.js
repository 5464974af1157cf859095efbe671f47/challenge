const express = require('express');
const router = express.Router();

router.get('/me', (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    message: 'Profile data retrieved successfully'
  });
});

router.put('/update', (req, res) => {
  const { email, bio } = req.body;
  
  res.json({
    message: 'Profile updated successfully',
    data: { email, bio }
  });
});

module.exports = router;
