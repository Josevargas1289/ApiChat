const Conversations = require("../models/conversations.models");
const Messages = require("../models/messages.models");
const Participants = require("../models/participants.models");
const Users = require("../models/users.models")


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

    static async getAll(){
        try {
            const conversations = await Conversations.findAll({
                attributes: ["title", "isGroup"]
            });
            return conversations
        } catch (error) {
            throw error;
        }
    }
    static async getConversationsUsersMessages(conversationsId){
        try {
            const result = await Conversations.findByPk(conversationsId,{
                attributes: {exclude:["id"]},
                

                include: [
                    {
                        model: Messages,
                        attributes: {exclude: ["updatedAt", "createdAt", "usersId","conversationsId" ]},


                    },
                    {
                    model: Participants,
                    attributes: {exclude: ["updatedAt", "createdAt", "usersId", "conversationsId", ]},
                    include:{
                    model: Users,
                    attributes: {exclude: ["updatedAt", "createdAt", "password", "conversationsId", ]},
                    },
                
                },
               
            ]
                
            })
            return result;
        } catch (error) {
            throw error
            
        }
    }

}

module.exports = conversationServices;
