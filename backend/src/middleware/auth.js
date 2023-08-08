const { decodeJWT } = require ("../helper/jwt.helper.js");

const authorization = async (req, res, next ) => { //* middleware pour verifier si l'utilisateur est connecté 
    
    try{
        const token = req.cookies.auth_token; //* on recupere le token dans le cookie auth_token

        if (!token) throw new Error();


        const data = decodeJWT(token); 

        req.userID = data.id;  //* on ajoute l'id de l'utilisateur dans la requete
        req.userName=data.name; //* on ajoute le nom de l'utilisateur dans la requete
        return next(); //* on passe au middleware suivant
    }catch(e) {
        res.sendStatus(401);
    }
};

module.exports = authorization;