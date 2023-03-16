const {Router} = require("express");
const {createConversationsSingle, createConversationsGroup, getAllConversations, getConversationUsersMessages} = require("../controllers/conversations.controller")

const router = Router();

router.post('/api/v1/conversations/single', createConversationsSingle)
router.post('/api/v1/conversations/group', createConversationsGroup)
router.get('/api/v1/conversations', getAllConversations);
router.get('/api/v1/:conversationsId/user/messages',getConversationUsersMessages )


module.exports = router; 