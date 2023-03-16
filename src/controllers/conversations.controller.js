const conversationServices = require("../services/converstions.services");


const createConversationsSingle = async (req, res, next) =>{
    try {
        const newConversation = req.body;
        const converstion = await conversationServices.create(newConversation);
        res.status(201).json(converstion)
        
    } catch (error) {
        next(error)
    }

}

const createConversationsGroup = async (req, res, next) =>{
    try {
        const newConversation = req.body;
        const converstion = await conversationServices.create(newConversation);
        res.status(201).json(converstion)
        
    } catch (error) {
        next(error)
    }

}

const getAllConversations = async (req, res, next) =>{
    try {
        const data = await conversationServices.getAll()
        res.json(data)
    } catch (error) {
        next(error);
    }
}

const getConversationUsersMessages = async (req, res, next) => {
    try {
        const { conversationsId  } = req.params;
        const conversationsUsersMessages = await conversationServices.getConversationsUsersMessages(conversationsId);
        res.json(conversationsUsersMessages)
    } catch (error) {
        next(error) 
    }
}

const deleteConversation = async (req, res, next)=>{
    try {
      const { id } = req.params;
      await conversationServices.delete(id);
      res.status(204).send();
      
    } catch (error) {
      next(error)
    }
  }

module.exports = {
    createConversationsSingle,
    createConversationsGroup,
    getAllConversations,
    getConversationUsersMessages,
    deleteConversation
}