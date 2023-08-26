const { findByEmail } = require("../model/user.model.js");
const { verifyPassword } = require("../helper/argon.helper.js");
const { encodeJWT } = require("../helper/jwt.helper.js");
const validateLogin = require("../validator/login.validator.js");



const login = async (req, res, next) => {
  try {
    const errors = validateLogin(req.body); //* on verifie que les données envoyé par le user sont correctes
    if (errors) return res.status(401).send(errors);//* si il y a des erreurs on les renvoie
    const [user] = await findByEmail(req.body.email);//* on cherche l'utilisateur dans la base de donnée avec le model findByEmail 
    if (!user) return res.status(401).send("Invalid Credentials"); //* si l'utilisateur n'existe pas on renvoie une erreur
    const passwordVerification = await verifyPassword( //* on verifie que le mot de passe est correcte avec le helper argon 
      user.password, 
      req.body.password 
    );
    if (!passwordVerification)  //* si le mot de passe est incorrect on renvoie une erreur
     return res.status(401).send("Invalid Credentials");
    delete user.password;    //* on supprime le mot de passe de l'utilisateur
    const token = encodeJWT(user); //* on encode le token avec le helper jwt
    res.cookie("auth_token",token,{ httpOnly: true, secure: false }); 
    //*  /httpOnly : empeche des manipulation du cookie en JS /Secure:true : le cookie sera renvoyé seulement si la requete est effectué par https.
    //* (en prod passer secure a True et donner un nom moins explicite au cookie)
    res.status(200).json({username:user.name, roles:user.roles}) //* on renvoie le nom et les roles de l'utilisateur 
  } catch (e) {
    res.sendStatus(500);
  }
};

const logout = async (req, res) => {
  res.clearCookie("auth_token").sendStatus(200); //* on supprime le cookie ce qui deconnect le user
};

module.exports = { login, logout};

