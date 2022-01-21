const {Router}=require(`express`);
const router=Router();
const Product=require(`../models/product.model`);
const TypeSchema=require(`../models/type.model`);
const home=async(req,res)=>{
try{
        const typeData=await TypeSchema.find().lean().exec();
        const products=await Product.find().populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();    
        return res.render("./users/index",{products:products,navbar:typeData});
        
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
    const product = await Product.findById(req.query.id).lean().exec();
    // * Add to user schema here */
    res.send({status:true,message:"Added to cart"});
}

const searchpage=async(req,res)=>{
let str=req.query.txt;
if(str.length>0)
str=str[0].toUpperCase()+str.slice(1);
const products= await Product.find({"product_name": new RegExp('.*' + str + '.*')}).populate({path:"brand_id"}).populate({path:"type_id"}).lean().exec();
    res.render("./users/searchpage",{status:true,search_txt:str,products:products})
}


module.exports={home,viewproduct,addtobag,searchpage};