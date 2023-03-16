const { check }= require("express-validator");
const validateResult = require("../utils/validate");


const createConversationValidator = [

     check("title", "error en el campo title")
    .exists()
    .withMessage("debe existir un contenido")
    .notEmpty()
    .withMessage("el campo no puede estar vacio")
    .isString()
    .withMessage("el contenido debe contener datos de tipo texto"),

    check("isGroup", "error con el campo usGroup")
    .exists()
    .withMessage("debe esxitir la opcion true y false para este campo, no puede ir vacio")
    .notEmpty()
    .withMessage("el campo no debe estar vacios")
    .isBoolean()
    .withMessage("Los valores de este campo deben ser de tipo boleano"),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];



module.exports = {
    createConversationValidator,
    
}


