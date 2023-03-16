const partcipantsServices = require("../services/participants.services")


const createParticipants = async (req, res, next) =>{
    try {
        const newParticipants = req.body;
        const participants = await partcipantsServices.created(newParticipants);
        res.status(201).json(participants)
        
    } catch (error) {
        next(error);
        
    }
}


module.exports ={
    createParticipants,
}