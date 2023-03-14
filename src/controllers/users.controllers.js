const UserServices = require("../services/users_services");

const createUser = async (req, res, next) =>{
    try {
        const newUser = req.body;
        const user = await UserServices.create(newUser);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

const getAllUsers = async (req, res,next) =>{
    try {
        const data = await UserServices.getAll()
        res.json(data)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getAllUsers,
}