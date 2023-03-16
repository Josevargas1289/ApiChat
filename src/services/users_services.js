const Users = require("../models/users.models")
const Conversations = require("../models/conversations.models");
const Participants = require("../models/participants.models");

class UserServices {

    static async getUser(email){
        try {
           const user = await Users.findOne({
            where: {email}
           });
           return user
        } catch (error) {
            throw error
        }
    }

    static async create(newUser){
        try {
            const user = await Users.create(newUser)
            return user 
        } catch (error) {
            throw error
            
        }
    }

    static async getAll(){
        try {
            const users = await Users.findAll({
                attributes: ["id","userName", "email", "firstName", "lastName"]
            });
            return users
        } catch (error) {
            throw error;
        }
    }
    static async getUsersAndConversations(userId){
        try {
            const result = await Users.findByPk(userId, {
                attributes: {exclude: ["id", "password", "createdAt","updatedAt"]},
                include: 
                    {
                        model: Participants,
                        attributes:{exclude: ["createdAt", "updatedAt", "conversationsId"]},
                        include: {
                            model: Conversations,
                            attributes: ["title", "isGroup"],
                        },  
                    }
            })
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices;