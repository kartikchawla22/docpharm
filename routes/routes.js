var express = require ('express');
var router = express.Router();
var controlles = require('../controllers/controller');

router.route('/try/PostUser')
.post(controlles.PostUser);
// .get(controlles.GetUser);



router.route('/try/PostDoc')
.post(controlles.PostDoc);


router.route('/try/PostPharm')
.post(controlles.PostPharm);



// router.route('/try/GetUserById/:id')
// .get(controlles.GetId);

// router.route('/try/GetUserByReg/:Reg')
// .get(controlles.GetReg)
module.exports = router;