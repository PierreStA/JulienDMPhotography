const argon2 = require("argon2");

const hashingOptions = { //* on definit les options pour le hashage
    type: argon2.argon2id,
    memoryCost: 2**16,
    timeCost: 5,
    parallelism: 1,
};

const hashPassword = (plainPassword) => { //* on hash le mot de passe avec les options definies
    return argon2.hash(plainPassword, hashingOptions); //* on renvoie le mot de passe hashé 
};

const verifyPassword = (hashedPassword,plainPassword ) => { //* on verifie le mot de passe avec les options definies
    return argon2.verify(hashedPassword,plainPassword, hashingOptions); 
};

module.exports = { hashPassword, verifyPassword};