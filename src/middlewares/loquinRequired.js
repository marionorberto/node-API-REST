import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['login required'],
    });
  }

  const [, token] = authorization.split(' ');
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = data;
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['invalid or expired token'],
    });
  }
};
