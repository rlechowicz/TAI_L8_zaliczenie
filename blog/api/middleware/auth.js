import jwt from 'jsonwebtoken';

const auth = (req, res, next) =>{
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

export default auth;
