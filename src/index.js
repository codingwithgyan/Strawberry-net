const express =require("express");

const app=express();

const authcontroller=require("./controllers/authcontroller")

const {register,login}=require("./controllers/usercontroller")

app.set("view engine", "ejs")     //setting ejs

app.use(express.static("public"))  //linking css and js from public folder

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use("/auth",authcontroller);  //authcontroller

app.use("/register", register);

app.use("/login", login);

module.exports=app;