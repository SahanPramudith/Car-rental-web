const express = require('express');
const router=express.Router();

const {saveposts,showpost} = require('../controll/coust_controll')

router.post("/postsave",saveposts);
router.get("/getpost",showpost)

module.exports=router;