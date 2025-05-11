// controllers/test-jwt.js

const express = require('express');
const router = express.Router();

router.get('/sign-token', (req, res) => {
  // Mock user object added
  const user = {
    _id: 1,
    username: 'test',
    password: 'test',
  };
});

module.exports = router;
