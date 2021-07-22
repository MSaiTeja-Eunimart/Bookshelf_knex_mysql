var config = {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password:"admin",
      database: "sms_test",
      charset: "utf8"
    }
  };
  
  var knex = require("knex")(config);
  var bookshelf = require("bookshelf")(knex);

  module.exports=bookshelf;