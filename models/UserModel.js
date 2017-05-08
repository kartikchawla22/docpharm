var mongoose = require('mongoose'); //Mongoose object
/*
*
* New Schema for User
*
*/
var User = new mongoose.Schema({
    username: {
        type: String
    },
    userid: {
        type: Number
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});






module.exports = mongoose.model("User", User); //User model is exported.
