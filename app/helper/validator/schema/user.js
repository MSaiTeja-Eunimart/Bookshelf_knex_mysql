let userSchema={
    type:'object',
    required:['st_name','st_phno','teacher_id'],
    properties:{
        st_name:{
            type:'string'
        },
        st_phno:{
            type: 'string'
        },
        teacher_id:{
            type: 'string'
        }
    }
}