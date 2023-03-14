const Types = require("../models/type.models");

class typesServices{

    static async create(newType){
        try {
            const type = await Types.create(newType)
            return type
        } catch (error) {
            throw error
        }
    }
    static async getAll(){
        try {
            const types = await Types.findAll({
                attributes: ["id", "name"]
            })
            return types
        } catch (error) {
            throw error
        }
    }

}

module.exports = typesServices;