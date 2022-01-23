const express = require(`express`);
const app=express();

const typeController=require(`./controllers/type.controller`);
const brandController=require(`./controllers/brand.controller`);
const productController=require(`./controllers/product.controller`);
const {home,viewproduct,addtobag,searchpage,cart,payment}=require(`./controllers/view.controller`);
const authcontroller=require("./controllers/auth.controller")
const {register,login}=require("./controllers/user.controller")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/types",typeController);
app.use("/brands",brandController);
app.use("/products",productController);
app.use("/home",home);
app.use("/viewproduct",viewproduct);
app.use("/addtobag",addtobag);
app.use("/searchpage",searchpage);
app.use("/cart",cart);
app.use("/payment",payment);
app.use(express.urlencoded({extended:true}))
app.use("/auth",authcontroller);  //authcontroller
app.use("/register", register);
app.use("/login", login);
app.set("view engine","ejs");

module.exports=app;