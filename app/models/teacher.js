const bookshelf=require('../utils/db');
const course=require('../models/course');

var Teacher = bookshelf.model( 'teacher', {
    tableName: "teacher",
    user(){
        return this.hasMany('User')
    },

    teacher(){
        return this.belongsTo(course,"course_id","id")
    }
});

module.exports=Teacher;