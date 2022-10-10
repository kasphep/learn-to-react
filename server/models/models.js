const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        unique: true,
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    ava: {
        type: DataTypes.STRING
    },
    obl: {
        type: DataTypes.STRING
    },
})

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    enclosure: {
        type: DataTypes.STRING,
        allowNull: true
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

const Dialog = sequelize.define('dialog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})

const Message = sequelize.define('message', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    enclosure: {
        type: DataTypes.STRING,
        allowNull: true
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

const UserDialog = sequelize.define('user_dialog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Dialog);
Dialog.belongsToMany(User, {through: UserDialog});

Dialog.hasMany(Message);
Message.belongsTo(Dialog);

User.hasMany(Message);
Message.belongsTo(User);

module.exports = {
    User,
    Post,
    Dialog,
    Message,
    UserDialog
}