const mongoose=require(`mongoose`);

const brandSchema = new mongoose.Schema({
        brand_name:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports=mongoose.model("brand",brandSchema);