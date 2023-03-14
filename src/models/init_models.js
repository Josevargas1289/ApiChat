const Users = require("./users.models");
const Type = require("./type.models");
const Messages = require("./messages.models");
const Conversations = require("./conversations.models");

const initModels = () =>{

    Users.hasMany(Conversations, {foreignKey: 'usersId' });
    Conversations.belongsTo(Users, {foreignKey: 'usersId'});

    Users.hasMany(Messages, {foreignKey: 'usersId'});
    Messages.belongsTo(Users, {foreignKey: 'usersId'});

    Conversations.hasMany(Messages, {foreignKey: 'conversationsId'});
    Messages.belongsTo(Conversations, {foreignKey: 'conversationsId'});

    Type.hasMany(Conversations,{foreignKey: 'typeId'});
    Conversations.belongsTo(Type, {foreignKey: 'typeId'});

}
module.exports = initModels;