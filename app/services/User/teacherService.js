const Teacher=require('../../models/teacher')
const Course=require('../../models/course');

class teacher{
    
    async getTeacher(req,res){
        const id = req.params.id;
        await Teacher.where("id",id).fetch().then(data =>{
            return res.json(data.toJSON());
        })
        .catch(err =>{
            return console.log(err);

    })
    }
    async getAllTeacher(req,res){
        await new Teacher().fetchAll().then(data=>{
            return res.json(data);
        })
        .catch(err =>{
            return res.json({"msg":err});
        })
    }

    async insertTeacher(req,res){
        await Teacher.forge({

            teach_name:req.body.teach_name,
            teach_phno:req.body.teach_phno,
            course_id:req.body.course_id

        }).save().then(data=>{
            return res.json(data);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    async deleteTeacher(req,res){
        await Teacher.where("id",req.params.id).destroy().then(data=>{
            return res.json(true);
        })
        .catch(err=>{
            return res.json({"msg":"Error"})
        })
    }

    async updateTeacher(req,res){
        await Teacher.where("id", req.params.id).save(
            { ...req.body },
            { patch: true } 
        );
        return res.json(true);
    }

}

module.exports=teacher;