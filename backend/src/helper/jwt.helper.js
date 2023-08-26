const jwt = require("jsonwebtoken");



const encodeJWT = (payload) => { //* on encode le token avec la clef secrete et on le renvoie 
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h" }); 
};


const decodeJWT = (token) => { 
  return jwt.decode(token, process.env.TOKEN_SECRET); //* on decode le token avec la clef secrete
};

module.exports = { encodeJWT, decodeJWT };