const express=require('express');
const router=express.Router();
const studentController=require("../controllers/students-controller");

//View All Records
router.get('/',studentController.view);

//Add new Records
router.get('/adduser',studentController.adduser);
router.post('/adduser',studentController.save);

//Edit Records
router.get('/edituser/:id',studentController.edituser);
router.post('/edituser/:id',studentController.edit);


//Delete Records
router.get('/deleteuser/:id',studentController.delete);
 module.exports=router;