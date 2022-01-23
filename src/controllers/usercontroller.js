const jwt=require("jsonwebtoken")

require("dotenv").config();

const newToken=(user)=>{
    return jwt.sign({ user: user },process.env.JWT_SECRET_KEY);
}

const User=require("../models/usermodel")

const register=async(req,res)=>{
    console.log(req.body);
    try {
        let user= await User.findOne({email:req.body.email});

        if(user){
            return res.status(400).send({message:"This email has been registered."})
        }

        user=await User.create(req.body)

        const token=newToken(user)
        return res.status(201).send({user,token});

    } catch (error) {
       return res.status(500).send(error.message)
    }
}

const login=async(req,res)=>{
    console.log(req.body)
    try{
        let user= await User.findOne({email:req.body.email});
      
       if(!user){
            return res.send({message:"Username and Password does not match"});
       }

       const match=user.checkPassword(req.body.password)

       if(!match)
          return res.send({ message:"Username and Password does not match"});
     
       const token=newToken(user)
       return res.status(201).send({user,token});

    }
    catch (error) {
       return res.status(500).send(error.message)
    }
}

module.exports={register,login};