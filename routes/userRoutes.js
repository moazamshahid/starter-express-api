var express = require('express');
var router = express.Router();

/* Serve the index.html file */
router.get('/file', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + './' });
});

/* Other routes go here... */

module.exports = router;