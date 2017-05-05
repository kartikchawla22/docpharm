var mongoose = require('mongoose');
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


module.exports = mongoose.model("User", User);
module.exports = mongoose.model("Doc", Doc);
module.exports = mongoose.model("Pharm", Pharm);