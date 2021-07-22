let teacherSchema={
    type:'object',
    required:['teach_name,teach_phno','course_id'],
    properties:{
        teach_name:{
            type:'string',
        },
        teach_phno:{
            type:'integer',
            minLength:10,
            maxLength:10
        },
        course_id:{
            type:'string'
        }
    }
}