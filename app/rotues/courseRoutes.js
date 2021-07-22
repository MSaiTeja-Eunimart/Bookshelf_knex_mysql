const express=require('express');
const route=express.Router();
const courseService=require('../services/User/courseService');
const courseSchema=require('../helper/validator/schema/course');
const validate=require('../helper/validator/requestValidator');

const course=new courseService();

route.get("/", async (req, res) => {
    course.getAllCourse(req,res);
});

route.get("/relation",async(req,res)=>{
  course.getDetails(req,res);
});

route.get("/:id", async (req, res) => {
    course.getCourse(req,res);
  });
  
route.post("/", validate({body:courseSchema}),async (req, res) => {
    course.insertCourse(req,res);
  });
  
route.delete("/:id", async (req, res) => {
    course.deleteCourse(req,res);
  });
  
route.put("/:id", validate({body:courseSchema}), async (req, res) => {
    course.updateCourse(req,res);
  });


module.exports=route;