const express = require('express');
const app = express();
const userRoutes=require('./app/rotues/userRoutes');
const teacherRoutes=require('./app/rotues/teacherRoutes');
const courseRoutes=require('./app/rotues/courseRoutes');

app.use(express.json());

app.use('/users',userRoutes);
app.use('/teacher',teacherRoutes);
app.use('/course',courseRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
