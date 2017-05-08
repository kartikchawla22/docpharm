var mongoose = require('mongoose');//Mongoose object
/*
*
* New Schema for Doctor
*
*/
var Pharm = new mongoose.Schema({
    pharmid: {
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
module.exports = mongoose.model("Pharm", Pharm); //Exporting Pharm model