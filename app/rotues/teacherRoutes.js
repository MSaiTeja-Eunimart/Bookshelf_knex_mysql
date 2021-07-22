const express=require('express');
const route=express.Router();
const teacherService=require('../services/User/teacherService');
const teacherSchema=require('../helper/validator/schema/teacher');
const validate=require('../helper/validator/requestValidator');

const teacher=new teacherService();

route.get("/", async(req,res) =>{
    teacher.getAllTeacher(req,res);
});


route.get("/:id", async (req, res) => {
    teacher.getTeacher(req,res);
  });
  
route.post("/",validate({body:teacherSchema}), async (req, res) => {
    teacher.insertTeacher(req,res);
  });
  
route.delete("/:id", async (req, res) => {
    teacher.deleteTeacher(req,res);
  });
  
route.put("/:id", validate({body:teacherSchema}),async (req, res) => {
    teacher.updateTeacher(req,res);
  });


module.exports=route;