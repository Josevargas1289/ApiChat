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

module.exports = {
    createConversationsSingle,
    createConversationsGroup
}