const {Router} = require("express");
const {createConversationsSingle, createConversationsGroup, getAllConversations, getConversationUsersMessages, deleteConversation} = require("../controllers/conversations.controller");
const {createConversationValidator } = require("../validators/conversations.validators")

const router = Router();

router.post('/api/v1/conversations/single', createConversationValidator, createConversationsSingle)
router.post('/api/v1/conversations/group', createConversationValidator, createConversationsGroup)
router.get('/api/v1/conversations', getAllConversations);
router.get('/api/v1/:conversationsId/user/messages',getConversationUsersMessages )
router.delete('/api/v1/conversations/:id', deleteConversation)


module.exports = router; 