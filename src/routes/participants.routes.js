const {Router} = require("express");
const {createParticipants} = require("../controllers/participans.controller")


const router = Router();
router.post('/api/v1/participants', createParticipants)



module.exports = router;