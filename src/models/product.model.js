const mongoose=require(`mongoose`);

const productSchema = new mongoose.Schema({
        product_name:{type:String,required:true},
        price:{type:Number,required:true},
        brand_id:{type:mongoose.Schema.Types.ObjectId,ref:"brand",required:true},
        type_id:{type:mongoose.Schema.Types.ObjectId,ref:"type",required:true},
        image_url_1:{type:String,required:true},
        image_url_2:{type:String,required:true},
        image_url_3:{type:String,required:true},
        size:[{type:String,required:true}],
        tags:[{type:String,required:false}],
        offer:{type:Number,required:false,default:0},
        description:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports=mongoose.model("product",productSchema);