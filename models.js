/**
 * Created by window7 on 2017-4-30.
 */
const Sequelize = require("sequelize");
const sequelize = require("./db.js");


var User = sequelize.define("user", {
    name: {
        type: Sequelize.STRING(20)
    },
    username: {
        type: Sequelize.STRING(30), unique:true
    },
    passwd: {
        type: Sequelize.STRING(32)
    },
    email: {
        type: Sequelize.STRING(40), unique:true
    }
});

sequelize.sync({force:true}).then(function(){
    console.log("db initialized\n\n")
});

module.exports = User;