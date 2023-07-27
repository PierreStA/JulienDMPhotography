const { decodeJWT } = require ("../helper/jwt.helper.js");

const authorization = async (req, res, next ) => {
    
    try{
        const token = req.cookies.auth_token; // on recupere le token dans le cookie

        if (!token) throw new Error();


        const data = decodeJWT(token); // on decode le token

        req.userID = data.id; 
        req.userName=data.name; 
        return next();
    }catch(e) {
        res.sendStatus(401);
    }
};

module.exports = authorization;