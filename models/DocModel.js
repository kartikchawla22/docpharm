var mongoose = require('mongoose');//Mongoose object
/*
*
* New Schema for Doctor
*
*/
var Doc = new mongoose.Schema({
    docid: {
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
module.exports = mongoose.model("Doc", Doc); //Exporting Doctor Model