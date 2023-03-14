const Conversations = require("../models/conversations.models")

class conversationServices{

    static async create(newConversation){
        try {
            const conversation = await Conversations.create(newConversation)
            return conversation
        } catch (error) {
            throw error
        }
    }
    
    static async create(newConversation){
        try {
            const conversation = await Conversations.create(newConversation)
            return conversation
        } catch (error) {
            throw error
        }
    }

}

module.exports = conversationServices;
