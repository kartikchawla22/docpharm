var express = require('express');
var router = express.Router();
var controlles = require('../controllers/controller');

router.route('/try/PostUser') //Api to Post User
    .post(controlles.PostUser);
// .get(controlles.GetUser);

// router.route('/try/GetUser') 
//     .get(controlles.GetUser);

router.route('/try/PostDoc') //API to post Doctor
    .post(controlles.PostDoc);


router.route('/try/PostPharm') //API to post Pharmacist
    .post(controlles.PostPharm);

router.route('/try/GetDocList') //API to get the list of all users who are doctor or Pharmacist 
    .get(controlles.GetDocList);


// router.route('/try/GetUserById/:id')
// .get(controlles.GetId);

// router.route('/try/GetUserByReg/:Reg')
// .get(controlles.GetReg)
module.exports = router;