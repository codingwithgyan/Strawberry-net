const express=require(`express`);
const router=express.Router();
const app=express();
const jwt=require(`jsonwebtoken`);
const Product=require(`../models/product.model`);
const TypeSchema=require(`../models/type.model`);
const Brand=require(`../models/brand.model`);
const User=require(`../models/user.model`);
require(`dotenv`).config();

const home=async(req,res,next)=>{
try
    {
        if(req.headers?.cookie)
        {
            let token=req.headers?.cookie.split("=")[1];
            jwt.verify(token, 'smuhdjdcbxzjhcdscdskjh', async function(err, decoded) {
                try
                {
                    const user=decoded.user;
                    const typeData=await TypeSchema.find().lean().exec();
                    const products=await Product.find().populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();    
                    return res.render("./users/index",{signin:true,user:user,products:products,navbar:typeData});
                }
                catch(e)
                {
                    console.log(e.message);
                }
            }); 
        }
        else
        {
            const typeData=await TypeSchema.find().lean().exec();
            const products=await Product.find().populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();    
            return res.render("./users/index",{signin:false,products:products,navbar:typeData});
        }
        
    }
    catch(e)
    {
        return res.status(500).send({status:false,error:e.message});
    }
};  

const viewproduct=async(req,res)=>{
        
        try
        {
            const product = await Product.findById(req.query.id).populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();
            return res.render("./users/viewproduct",{product:product});
        }
        catch(e)
        {
            return res.status(500).send({status:false,error:e.message});
        }
};

const addtobag=async(req,res)=>{

    if(req.headers?.cookie)
    {
        try
        {
            let token=req.headers?.cookie.split("=")[1];
            jwt.verify(token, 'smuhdjdcbxzjhcdscdskjh', async function(err, decoded) {
                let user=decoded.user;
                user= await User.findById({_id:user._id});
                let arr=user.cart;
                arr.push(req.query.id);
                const userData = await User.findByIdAndUpdate({_id:user._id},{cart:arr});
                res.status(200).send({status:true,user:user});
            });
        }
        catch(e)
        {
            res.status(403).send({status:false});
        }
    } 
    else
    {
        res.status(403).send({status:false});
    }      
   
   
   
}

const searchpage=async(req,res)=>{
    try
    {
        let str=req.query.txt;
        if(str.length>0)
        str=str[0].toUpperCase()+str.slice(1);
        const products= await Product.find({"product_name": new RegExp('.*' + str + '.*')}).populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();
        const brands  = await Brand.find().lean().exec();
        const types = await TypeSchema.find().lean().exec();
        res.render("./users/searchpage",{status:true,search_txt:str,products:products,brands:brands,types:types});
    }
    catch(e)
    {
        res.status(500).send({error:e.message});
    }
}

const typesearch=async(req,res)=>{
    try
    {
        let str=req.query.type;
        const types = await TypeSchema.findOne({type_name:str}).lean().exec();
        const products= await Product.find({type_id: types._id}).populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();
        const brands  = await Brand.find().lean().exec();
        
        res.render("./users/searchpage",{status:true,search_txt:str,products:products,brands:brands,types:types});
    }
    catch(e)
    {
        res.status(500).send({error:e.message});
    }
}


const cart=async(req,res)=>{
    if(req.headers?.cookie)
        {
            let token=req.headers?.cookie.split("=")[1];
            jwt.verify(token, 'smuhdjdcbxzjhcdscdskjh', async function(err, decoded) {
                try
                {
                    let user=decoded.user;
                    user = await User.findById(user._id);
                    const typeData=await TypeSchema.find().lean().exec();

                    let product_list=[];
                    for(let i=0;i<user.cart.length;i++)
                    {
                       let products=await Product.find({_id:user.cart[i]}).populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();    
                       product_list.push(JSON.stringify(products));
                       

                    }
                 //   console.log(product_list);
                    
                    return  res.render("./users/cart",{signin:false,product:product_list});

                    //return res.render("./users/index",{signin:true,user:user,products:products,navbar:typeData});
                }
                catch(e)
                {
                    console.log({signin:false});
                }
            }); 
        }
        else
        {
            return res.redirect("/auth",{signin:false});
        }
}

const payment=async(req,res)=>{
      res.status(200).render("./users/payment");          
}


module.exports={home,viewproduct,addtobag,searchpage,cart,payment,typesearch};