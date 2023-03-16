const {Router} = require("express");
const { createMessages, getAllMessages }= require("../controllers/messages.controller");


const router = Router();

router.post('/api/v1/messages', createMessages);
router.get('/api/v1/messages', getAllMessages);


module.exports = router; 
