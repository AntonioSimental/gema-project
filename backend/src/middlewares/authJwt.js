const jwt = require('jsonwebtoken')

function authToken(req, res, next) {
  try {
    const [Authorization] = req.header

    jwt.verify(Authorization, "claveSuperSecreta");
  } catch (err) {
    res.status(401).json({msg: "Invalid JSON"});
  }
  next()
}