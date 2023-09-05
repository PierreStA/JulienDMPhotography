const { decodeJWT } = require ("../helper/jwt.helper.js");

//* middleware qui verifie que l'utilisateur est authaurisé a faire la requete
const authorization = async (req, res, next ) => { 
    
    try{
        const token = req.cookies.auth_token; 
        if (!token) throw new Error();

        const data = decodeJWT(token); //* on decode le token avec le helper jwt
        req.userID = data.id;  //* on ajoute l'id de l'utilisateur dans la requete
        req.userName=data.name; //* on ajoute le nom de l'utilisateur dans la requete
        return next(); 
    }catch(e) {
        console.error(e.message);
        res.sendStatus(401);
    }
};

module.exports = authorization;