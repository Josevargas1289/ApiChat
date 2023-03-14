const {Router} = require("express");
const { createMessages }= require("../controllers/messages.controller");


const router = Router();

router.post('/api/v1/messages', createMessages)


module.exports = router; 
