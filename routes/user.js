const express= require('express');
const router= express.Router();
const {handleusersignup}= require("../controllers/user")
const {handleuserlogin} = require("../controllers/user");

router.post('/', handleusersignup);
router.post('/login',handleuserlogin);

module.exports= router;
