const TypesServices = require("../services/types.services");

const createTypes = async (req, res, next)=>{
    try {
        const newType = req.body;
        const Type = await TypesServices.create(newType);
        res.status(201).json(Type)
    } catch (error) {
        next(error)
    }
}

const getAllTypes = async (req, res, next)=>{
    try {
        const data = await TypesServices.getAll()
        res.json(data)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createTypes,
    getAllTypes
}