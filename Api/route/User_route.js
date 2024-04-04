const express = require('express')
const router = express.Router();
const {savepost ,getuser}=require('../controll/User_controll')


router.post('/usersave',savepost);
router.get('/userget',getuser);

module.exports =router;