const bookshelf=require('../utils/db');
const teacher=require('./teacher')

var User = bookshelf.model( 'User', {
    tableName: "user1",
    teacher(){
        return this.belongsTo(teacher,'id','teacher_id');
    }

    
});

module.exports=User;