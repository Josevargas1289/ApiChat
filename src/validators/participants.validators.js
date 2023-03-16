const { check } = require("express-validator");
const validateResult = require("../utils/validate"); 

const createParticipansValidator= [

    check("usersId", "error con le id del usuario")
    .exists()
    .withMessage("debe existir el id del usuario")
    .notEmpty()
    .withMessage("el campo con el id del usuario no puede estar vacio")
    .isNumeric()
    .withMessage("el campo debe ser numerico"),

    check("conversationsId", "error con le id  de la conversacion")
    .exists()
    .withMessage("debe existir el id del de la conversacion")
    .notEmpty()
    .withMessage("el campo con el id de la conversacion no puede estar vacio")
    .isNumeric()
    .withMessage("el campo debe ser numerico"),

    (req, res, next)=>{
        validateResult(req, res, next);
    }
]

module.exports = {
    createParticipansValidator
}