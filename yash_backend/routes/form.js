const express=require('express');
const router=express.Router();
const authController=require('../controllers/formcontrol');

router.post('/',authController.addStudent);

module.exports=router;