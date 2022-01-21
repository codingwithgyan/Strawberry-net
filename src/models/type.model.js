const mongoose=require(`mongoose`);

const typeSchema = new mongoose.Schema({
        type_name:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports=mongoose.model("type",typeSchema);