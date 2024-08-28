

const router = require('express').Router();

const studentController = require('../controller/studetController');



router.get('/getAll', studentController.getAllStudent);


module.exports = router;