var mongoose = require('mongoose');
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
module.exports = mongoose.model("Pharm", Pharm);