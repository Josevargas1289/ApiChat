const { Router } = require("express");
const { createUserValidator} = require("../validators/user.validators")
const { createUser, getAllUsers, getusersAndConversations } = require("../controllers/users.controllers")



const router = Router();
router.post('/api/v1/users',createUserValidator, createUser);
router.get('/api/v1/users', getAllUsers);
router.get('/api/v1/:userId/conversations', getusersAndConversations);

module.exports = router;
