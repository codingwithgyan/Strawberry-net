const mongoose = require(`mongoose`);
module.exports=()=>{
    return mongoose.connect("mongodb+srv://codewithgyan:gyan@cluster0.imvhv.mongodb.net/strawberry");
}