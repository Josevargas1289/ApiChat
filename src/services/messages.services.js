const Messages = require("../models/messages.models")

class MessageServices {

    static async create(newMessage){
        try {
            const message = await Messages.create(newMessage);
            return message;
        } catch (error) {
            throw error
        }
    }
    static async getAll(){
        try {
            const messages = await Messages.findAll({
                attributes: ["content", "usersId", "conversationsId"]
            });
            return messages
        } catch (error) {
            throw error;
        }
    }

}

module.exports = MessageServices;