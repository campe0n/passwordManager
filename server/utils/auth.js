require("dotenv");
const jwt = require("jsonwebtoken");

const secret = process.env.TOKEN_SECRET;
const expiration = process.env.TOKEN_EXP;

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },
  signToken: function ({ firstName, lastName, email, password, _id }) {
    const payload = { firstName, lastName, email, password, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
