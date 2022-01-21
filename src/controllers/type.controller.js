const {Router}=require(`express`);
const router=Router();
const TypeSchema=require(`../models/type.model`);


router.post("/",async(req,res)=>{
        try
        {   
            const TypeData=await TypeSchema.create(req.body);
            res.status(201).send({status:true,data:TypeData});
        }
        catch(e)
        {
            return res.status(500).send({status:false,error:e.message});
        }
});

router.get("/",async(req,res)=>{
    try
    {   
        const TypeData=await TypeSchema.find().lean().exec();
        res.status(201).send({status:true,data:TypeData});
    }
    catch(e)
    {
        return res.status(500).send({status:false,error:e.message});
    }
});

module.exports=router;