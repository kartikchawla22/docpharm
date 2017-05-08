var mongoose = require('mongoose');
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
module.exports = mongoose.model("Doc", Doc);