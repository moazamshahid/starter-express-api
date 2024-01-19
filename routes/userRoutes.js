var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getroute', function(req, res, next) {
return res.status(200).json({message:"hello im new rotes for the express router"})

});

module.exports = router;
