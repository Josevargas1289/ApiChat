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


module.exports ={
    createMessages
}