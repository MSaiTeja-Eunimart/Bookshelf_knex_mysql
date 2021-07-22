const express=require('express');
const route=express.Router();
const userService=require('../services/User/userService');
const userSchema=require('../helper/validator/schema/user');
const validate = require('../helper/validator/requestValidator');

const user=new userService();

route.get("/", async (req, res) => {
    user.getAllStudent(req,res);
});

route.get("/relation",async(req,res)=>{
  user.getDetails(req,res);
})

route.get("/:st_id", async (req, res) => {
    user.getStudent(req,res);
  });
  
route.post("/", validate({body:userSchema}),async (req, res) => {
    user.insertStudent(req,res);
  });
  
route.delete("/:st_id", async (req, res) => {
    user.deleteStudent(req,res);
  });
  
route.put("/:st_id",validate({body:userSchema}), async (req, res) => {
    user.updateStudent(req,res);
  });


module.exports=route;