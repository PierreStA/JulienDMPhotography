const Joi = require("joi");

const validateUser = (user, createMod) => { 
  const mode = createMod ? "required" : "optional"; //* si on est en mode creation on rend les champs obligatoire sinon on les rend optionnel
//*59min
  const result = Joi.object({
    name: Joi.string().min(3).max(100).presence(mode),
    email: Joi.string().email().presence(mode),
    password: Joi.string().min(8).max(30).presence(mode),
  })
    .required()
    .min(1)
    .validate(user, { abortEarly: false }).error; 

  if (result) {
    const errorMessages = result.details.map((error) => ({ 
      message: error.message,
    }));
    return { errorCount: result.details.length, errorMessages }; //* on renvoie le nombre d'erreur et les messages d'erreur
  }
  return result; 
};



module.exports = validateUser;