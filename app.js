const express=require('express');
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');
const mysql=require('mysql');


require('dotenv').config();

const app=express();
const port=5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Static Files
app.use(express.static('public'));

//Template Engine
const handlebars=exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

/*
//Mysql connection
const con=mysql.createPool({
    connectionLimit:10,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME
})

//Check Database
con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("Connection Success");
})
    */
   
//Router
// app.get('/',(req,res)=>{
//     res.render('home');
// });

const routes=require("./server/routes/students");
app.use('/',routes);

//Listen Port
app.listen(port,()=>{
    console.log(`Listening port: `+port)
});