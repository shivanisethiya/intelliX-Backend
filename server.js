const express=require('express');
const app=express();
const {Sequelize}=require('sequelize');
const path=require('path');
const cors =require('cors');
const studentRoutes = require("./src/routes/studentRoutes");

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/students', studentRoutes);


app.listen(process.env.PORT || 5000, () =>{
   console.log('server is running on port 5000');
})

