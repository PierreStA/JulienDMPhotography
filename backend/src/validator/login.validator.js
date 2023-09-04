const Joi = require("joi");

//* on verifie que les données envoyé par le user respectent les conditions suivantes
const validateLogin = (user) => {
  const result = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(8).max(30).presence("required"),
  })
    .required()
    .validate(user, { abortEarly: false }).error; 
  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));
    return { errorCount: result.details.length, errorMessages }; //* on renvoie le nombre d'erreurs et les messages d'erreurs
  }
  return result;
};

module.exports = validateLogin;