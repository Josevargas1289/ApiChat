const {Router} = require("express");
const {createConversationsSingle, createConversationsGroup} = require("../controllers/conversations.controller")

const router = Router();

router.post('/api/v1/conversations/single', createConversationsSingle)
router.post('/api/v1/conversations/group', createConversationsGroup)


module.exports = router; 