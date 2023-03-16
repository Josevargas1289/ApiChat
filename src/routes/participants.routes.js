const {Router} = require("express");
const {createParticipants} = require("../controllers/participans.controller")

const {createParticipansValidator} = require("../validators/participants.validators")


const router = Router();
router.post('/api/v1/participants', createParticipansValidator, createParticipants);



module.exports = router;