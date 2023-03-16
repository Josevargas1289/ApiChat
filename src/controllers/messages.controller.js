const MessageServices = require("../services/messages.services")


const createMessages = async (req, res, next)=>{
    try {
        const newMessage = req.body;
        const message = await MessageServices.create(newMessage);
        res.status(201).json(message)
        
    } catch (error) {
        next(error)
    }

}

const getAllMessages = async (req, res, next) =>{
    try {
        const data = await MessageServices.getAll()
        res.json(data)
    } catch (error) {
        next(error);
    }
}


module.exports ={
    createMessages,
    getAllMessages
}