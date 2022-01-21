const {Router}=require(`express`);
const router=Router();
const BrandSchema=require(`../models/brand.model`);

router.post("/",async(req,res)=>{
        try
        {   
            const BrandData=await BrandSchema.create(req.body);
            res.status(201).send({status:true,data:BrandData});
        }
        catch(e)
        {
            return res.status(500).send({status:false,error:e.message});
        }
});
router.get("/",async(req,res)=>{
    try
    {   
        const BrandData=await BrandSchema.find().lean().exec();
        res.status(201).send({status:true,data:BrandData});
    }
    catch(e)
    {
        return res.status(500).send({status:false,error:e.message});
    }
});

module.exports=router;