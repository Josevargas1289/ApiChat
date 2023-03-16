const Participants = require("../models/participants.models")

class partcipantsServices {
    static async created(newParticipants){
        try {
            const participants = await Participants.create(newParticipants)
            return participants;
        } catch (error) {
            throw error
        }
    }

}

module.exports = partcipantsServices;