const express=require("express");

const router = express.Router();

const User=require("../models/usermodel")

router.get("", async (req, res) => {

  return res.render("Authentication");
  
});


module.exports=router;