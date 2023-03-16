const {Router} = require("express");
const { createMessages, getAllMessages }= require("../controllers/messages.controller");
const { MessagesValidator } = require("../validators/messages.validators")


const router = Router();

router.post('/api/v1/messages', MessagesValidator, createMessages);
router.get('/api/v1/messages', getAllMessages);


module.exports = router; 
