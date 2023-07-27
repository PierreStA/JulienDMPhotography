const { findByEmail } = require("../model/user.model.js");
const { verifyPassword } = require("../helper/argon.helper.js");
const { encodeJWT } = require("../helper/jwt.helper.js");
const validateLogin = require("../validator/login.validator.js");


// 1h45
const login = async (req, res, next) => {
  try {
    const errors = validateLogin(req.body);

    if (errors) throw new ModelValidationError(errors);

    const [user] = await findByEmail(req.body.email);

    if (!user) return res.status(401).send("Invalid Credentials");

    const passwordVerification = await verifyPassword(
      user.password,
      req.body.password
    );

    if (!passwordVerification) 
    return res.status(401).send("Invalid Credentials");

    delete user.password;

    const token = encodeJWT(user);

    // res.cookie("auth_token", token, { httpOnly: true, secure: false });

    res.cookie("auth_token",token,{ httpOnly: true, secure: false }); 
    // nom du cookie, donnée, param /httpOnly : empeche des manipulation du cookie en JS /Secure:true : le cookie sera renvoyé seulement si la requete est effectué par https.
    // ( en prod passer secure a True et donner un nom moins explicite au cookie )
    res.status(200).json({username:user.name, roles:user.roles})
  } catch (e) {
    res.sendStatus(500);
  }
};

const logout = async (req, res) => {
  res.clearCookie("auth_token").sendStatus(200); // on supprime le cookie ce qui deconnect le user
};

module.exports = { login, logout};
//stop 1h56
