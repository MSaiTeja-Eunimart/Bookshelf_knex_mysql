let courseSchema={
    type:'object',
    required:['course_name'],
    properties:{
        course_name:{
            type:'string'
        }
    }
}

module.exports = courseSchema;