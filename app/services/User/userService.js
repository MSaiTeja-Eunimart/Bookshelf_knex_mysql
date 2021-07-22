const User=require('../../models/user');
const teacher = require('../../models/teacher');
const url=require('url');

class user{
    
    async getDetails(req,res){
        // console.log("hello");
        const queryObj=url.parse(req.url,true).query;
        // const st_id=queryObj.st_id;
        console.log(queryObj)
        //const st_id = req.params.st_id;
        //console.log(queryObj);
        await teacher.where("id",queryObj.id).fetch({withRelated:['user']}).then(data =>{
            return res.json(data.toJSON());
        })
        .catch(err =>{
            return console.log(err);
    })
    }

    async getStudent(req,res){
        const st_id=req.params.st_id;
        await User.where("st_id",st_id).fetch().then(data =>{
            return res.json(data.toJSON());
        })
        .catch(err =>{
            return res.send(err);
        })
    }

    async getAllStudent(req,res){
        await new User().fetchAll().then(data=>{
            return res.json(data);
        })
        .catch(err =>{
            return res.json({"msg":err});
        })
    }

    async insertStudent(req,res){
        await User.forge({

            st_name:req.body.st_name,
            st_phno:req.body.st_phno,
            teacher_id:req.body.teacher_id

        }).save().then(data=>{
            return res.json(data);
        })
        .catch(err =>{
            return res.send(err);
        })
    }

    async deleteStudent(req,res){
        await User.where("st_id",req.params.st_id).destroy().then(data=>{
            return res.json(data);
        })
        .catch(err=>{
            return res.json({"msg":"Error"})
        })
    }

    async updateStudent(req,res){
        await User.where("st_id", req.params.st_id).save(
            { ...req.body },
            { patch: true }
        );
        return res.json(true);
    }

}

module.exports=user;