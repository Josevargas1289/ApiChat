const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const LoginUserValidator =[
    check("email", "Error con el correo electronico")
    .exists()
    .withMessage("No se encontro la propiedad email")
    .notEmpty()
    .withMessage("No se encontro un valor para el email")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
    .isEmail()
    .withMessage("El correo no tiene un formato correcto"),
    (req, res, next) => {
        validateResult(req, res, next);
      },
]
module.exports = {
    LoginUserValidator
}
