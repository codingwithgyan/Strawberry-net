const mongoose=require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Ananthu098:4825@cluster0.vdhzd.mongodb.net/strawberrynet"
  );
};
