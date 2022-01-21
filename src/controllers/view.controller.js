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
const str=req.query.txt;
const products= await Product.find({"product_name": new RegExp('.*' + str + '.*')}).lean().exec();
console.log(products);
    res.render("./users/searchpage",{products:products})
}


module.exports={home,viewproduct,addtobag,searchpage};