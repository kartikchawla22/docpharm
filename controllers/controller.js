var User = require('../models/UserModel');
var Doc = require('../models/DocModel');
var Pharm = require('../models/PharmModel');
var Promise = require("bluebird");
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
exports.PostUser = function (req, res) {
    console.log(req.body);
    var user = new User({
        username: req.body.username,
        userid: req.body.userid,
        createdAt: new Date(),
        updateAt: null
    });
    user.save(function (err, response) {
        if (err) {
            return "Error";

        }
        res.json({
            success: true,
            body: response
        })

    })
}
exports.PostDoc = function (req, res) {
    console.log(req);
    var doc = new Doc({
        docid: req.body.docid,
        createdAt: new Date(),
        updateAt: null
    });
    doc.save(function (err, response) {
        if (err) {
            return "Error";

        }
        res.json({
            success: true,
            body: response
        })

    })
}
exports.PostPharm = function (req, res) {
    console.log(req);
    var pharm = new Pharm({
        pharmid: req.body.pharmid,
        createdAt: new Date(),
        updateAt: null
    });
    pharm.save(function (err, response) {
        if (err) {
            return "Error";

        }
        res.json({
            success: true,
            body: response
        })

    })
}
// var DocUserList = function(){

// return new Promise(resole, reject){

// }

// } 











var PharmList = [];
var DocList = [];
exports.GetDocList = function (req, res) {

    User.find({}).exec()
        .then(function (user) {

            return Doc.find({
                    docid: user.userid
                }).exec()
                .then(function (doc) {
                    DocList.push(user);
                });
        })
        .then(function (user) {

            return Pharm.find({
                    pharmid: user.userid
                }).exec()
                .then(function (pharm) {
                    PharmList.push(user);
                });
        })
console.log(DocList + "Doctor");
console.log(PharmList + "Pharm");
}

// exports.GetUser = function (req, res) {
//     User.find({}, function (err, response) {
//         if (err) {
//             return "Error";
//         }
//         res.json(response);
//     })
// }



// exports.GetReg = function(req, res){
//     var Reg = new RegExp (req.params.Reg);
//     User.find({username:Reg}, function(err, response){
//         if(err){
//             return "error";
//         }
//         res.json(response);
//     })
// }