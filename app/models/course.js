const bookshelf=require('../utils/db');
const teacher = require('./teacher');

var Course=bookshelf.model( 'course',{
    tableName:'course',
    course(){
        return this.hasOne('teacher');
    }
})

module.exports=Course;