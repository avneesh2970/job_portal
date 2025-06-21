// authMiddleware.js

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']; // Assuming you're sending a token in headers

  if (!token) {
    return res.status(401).json({ message: 'You must be logged in to apply.' });
  }

  try {
    // Verify token here (for example, using JWT)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = decoded.findOne({email: email});
     req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authMiddleware;
