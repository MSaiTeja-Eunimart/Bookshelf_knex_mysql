const Course=require('../../models/course');
const teacher = require('../../models/teacher');
const url = require('url');
const Promise = require('bluebird');
const { resolve } = require('path');
const { rejects } = require('assert');
const bookshelf = require('../../utils/db');


class course{
    
    async getCourse(req,res){
        const id=req.params.id;
        await Course.where("id",id).fetch().then(data =>{
            return res.json(data.toJSON());
        })
        .catch(err =>{
            return res.send(err);
        })
    }

    async getDetails(req,res){
        const queryObj=url.parse(req.url,true).query;
        console.log(queryObj);

        await teacher.where("id",queryObj.id).fetch({withRelated:['teacher']})
        .then(data =>{
            return res.json(data.toJSON());
        })
        .catch(err =>{
            return console.log(err);
        })
    }


    async getAllCourse(req,res){
        await new Course().fetchAll().then(data=>{
            return res.json(data);
        })
        .catch(err =>{
            return res.json({"msg":err});
        })
    }

    async insertCourse(req,res){
        return new Promise(async(resolve,reject)=>{
            bookshelf.transaction(async(t)=>{
                try{
                    await Course.forge({
                        course_name:req.body.course_name
                    }).save(null,{transacting: t})
                    t.commit()
                    res.status(400).json(true)
                }
                catch(err){
                    console.log(err);
                    await this.rollbackTransaction(t)
                    res.status(201).json(false);
                }
            })
        })

        // await Course.forge({
        //     course_name:req.body.course_name
        // }).save().then(data=>{
        //     return res.json(data);
        // })
        // .catch(err =>{
        //     console.log(err);
        //     //return res.send(err);
        // })
    }

    async deleteCourse(req,res){
        await Course.where("id",req.params.id).destroy().then(data=>{
            return res.json(data);
        })
        .catch(err=>{
            return res.json({"msg":"Error"})
        })
    }

    async updateCourse(req,res){
        await Course.where("id", req.params.id).save(
            { ...req.body },
            { patch: true }
        );
        return res.json(true);
    }
}

module.exports=course;