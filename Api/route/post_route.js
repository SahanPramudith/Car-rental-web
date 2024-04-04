const express = require('express')
const router = express.Router(); 
const {upload} = require("../middllwhere/multer")


const {postsave,updatepost,deletepost,getpost}=require("../controll/post_controll");

router.post('/postsave',upload.single("image"),postsave);

router.put('/postupdate/:id',upload.single("image"),updatepost);

router.delete('/deletepost/:id',deletepost);

router.get('/getpost',getpost);

//router.post('/image_uploder/:id',upload.single("image"),uplodeimg);

module.exports=router;