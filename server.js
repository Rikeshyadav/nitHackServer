const express=require('express');
const colors=require('colors');
const morgan=require('morgan');
const connectDB=require('./config/db');

const app=express();

const dotenv=require('dotenv');
dotenv.config({
    path:'./config/config.env'
});
app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
    extended:true
}))

connectDB();
app.use('/api/student',require('./routes/student'));
app.use('/api/guard',require('./routes/guard'));
app.use('/api/faculity',require('./routes/faculity'));
app.use('/api/admin',require('./routes/admin'));

app.use('/api/faculity',require('./routes/authFaculity'));
app.use('/api/guard',require('./routes/authGuard'));
app.use('/api/student',require('./routes/authStudent'));

/* app.use('/api/patient',require('./routes/searchPatient'));
app.use('/api/patient',require('./routes/patientDetails'));
app.use('/api/doctor',require('./routes/doctorDetails'));
app.use('/api/patient',require('./routes/updatePatient'));
app.use('/api/doctor',require('./routes/updateDoctor'));
*/
const PORT=process.env.PORT || 3000;


app.listen(3000,console.log(`Server is running on port : ${PORT}`.red.underline.bold));