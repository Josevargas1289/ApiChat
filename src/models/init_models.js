const Users = require("./users.models");
const Messages = require("./messages.models");
const Conversations = require("./conversations.models");
const Participants = require("./participants.models");


const initModels = () =>{

    Users.hasMany(Messages, {foreignKey: "usersId"});
    Messages.belongsTo(Users, {foreignKey: "usersId"});

    Users.hasMany(Participants, {foreignKey: "usersId"});
    Participants.belongsTo(Users, {foreignKey: "usersId"});

    Conversations.hasMany(Messages, {foreignKey: "conversationsId"});
    Messages.belongsTo(Conversations, {foreignKey: "conversationsId"});

    Conversations.hasMany(Participants, {foreignKey: "conversationsId"});
    Participants.belongsTo(Conversations, {foreignKey: "conversationsId"}); 


}
module.exports = initModels;