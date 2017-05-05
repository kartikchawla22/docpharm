var User = require('../models/model');

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
    var doc = new User({
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
    var pharm = new User({
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

// exports.GetId = function(req, res){
//     var id = req.params.id;
//     User.findOne({roll_no:id}, function(err, response){
//         if(err){
//             return "error";
//         }
//         res.json(response);
//     })
// }

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