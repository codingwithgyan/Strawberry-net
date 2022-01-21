const {Router}=require(`express`);
const router=Router();
const ProductSchema=require(`../models/product.model`);

router.post("/",async(req,res)=>{
        try
        {   
            const ProductData=await ProductSchema.create(req.body);
            res.status(201).send({status:true,data:ProductData});
        }
        catch(e)
        {
            return res.status(500).send({status:false,error:e.message});
        }
});

router.get("/",async(req,res)=>{
    try
    {   
        const ProductData=await ProductSchema.find().lean().exec();
        res.status(201).send({status:true,data:ProductData});
    }
    catch(e)
    {
        return res.status(500).send({status:false,error:e.message});
    }
});

module.exports=router;