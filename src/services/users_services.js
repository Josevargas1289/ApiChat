const Users = require("../models/users.models")

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


}

module.exports = UserServices;