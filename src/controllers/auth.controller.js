const express=require("express");

const router = express.Router();

const User=require("../models/user.model")

router.get("", async (req, res) => {

  return res.render("./users/Authentication");
  
});


module.exports=router;