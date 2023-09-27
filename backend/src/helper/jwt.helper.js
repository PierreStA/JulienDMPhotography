const jwt = require("jsonwebtoken");

const encodeJWT = (payload) => { //* on encode le token avec la clef secrete et on le renvoie 
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h" }); 
};


const decodeJWT = (token) => { //* on extrait les information du token avec la clef secrete 
  return jwt.decode(token, process.env.TOKEN_SECRET); 
};

module.exports = { encodeJWT, decodeJWT };