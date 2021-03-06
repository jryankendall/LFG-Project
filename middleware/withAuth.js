require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.EXPRESS_SECRET;
const parser = require("cookie-parser");

const withAuth = function(req, res, next) {
  console.log(parser.JSONCookies(req.cookies));
  

  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

  if (!token) {
    res.status(401).send('Unauthorized: No token provided.');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token.');
      } else {
        req.username = decoded.username;
        console.log(req.username);
        
        next();
      }
    });
  }
};

module.exports = withAuth;
