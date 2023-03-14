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


}

module.exports = UserServices;